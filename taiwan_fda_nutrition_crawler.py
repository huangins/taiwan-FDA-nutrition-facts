# coding=UTF-8
import requests
from bs4 import BeautifulSoup
import pandas as pd
import time


"""
Nutrition Facts from Taiwan FDA
"""


class NoneItemException(Exception):
    def __init__(self, value=None):
        self.value = value

    def __str__(self):
        return self.__class__.__name__ + ' : ' + repr(self.value)


class NutritionCrawler():
    """
    Crawler Class
    """

    def __init__(self):
        self.url_template = \
        (
        "https://consumer.fda.gov.tw/Food/detail/TFNDD.aspx?f=0&pid=%s"
        )
        self.pid_range = range(0,2100)
        self.required_nutrition = ['修正熱量', '水分', '粗蛋白', '粗脂肪'
                               ,'總碳水化合物']
        self.required_entry = ['每單位重', '每100克含量']
        self.translate = {
            '每單位重_修正熱量': 'unit_calories',
            '每單位重_粗蛋白': 'unit_protein',
            '每單位重_水分': 'unit_water',
            '每單位重_粗脂肪': 'unit_fat',
            '每單位重_總碳水化合物': 'unit_carbs',
            '每100克含量_修正熱量': '100g_calories',
            '每100克含量_粗蛋白': '100g_protein',
            '每100克含量_水分': '100g_water',
            '每100克含量_粗脂肪': '100g_fat',
            '每100克含量_總碳水化合物': '100g_carbs',
        }
        self.expected_shape = (1, len(self.required_nutrition)*2 +4)

        self.json_file = 'nutrition.json'
        self.search_content_file = 'search_content.txt'

    def get_one_pid_df(self, pid):
        """
        Parameter
        ----------
        pid: int
            page id

        return
        -------
        pandas.DataFrame
        """


        html = requests.get(self.url_template % pid).content
        soup = BeautifulSoup(html, 'lxml')

        piece_weight = soup.find('input', id="txtEP1Result").get('value')
        name = soup.find('span', id='lbFoodName').text
        trivial = soup.find('span', id='lbTrivialName').text
        category = soup.find('span', id='lbFoodCategoryName').text

        table = soup.find('table', id='GridView1')
        if table is None:
            raise NoneItemException
            return


        df = pd.read_html(str(table), header=0, index_col=1, encoding='utf8')[0]

        df_list = []
        for i in self.required_entry:
            tmp = df.loc[self.required_nutrition].filter(regex=i).T.reset_index(drop=True).iloc[0].to_frame().transpose()
            tmp = tmp.rename(columns = lambda x: i + '_' + x)
            df_list.append(tmp)

        df = pd.concat(df_list, axis=1)

        df.loc[:, 'name'] = name
        df.loc[:, 'trivial'] = trivial
        df.loc[:, 'category'] = category
        df.loc[:, 'piece_weight'] = piece_weight

        return df


    def get_entrie_df(self, range_=None):
        """

        """

        if range_ is None:
            range_ = self.pid_range
        df_list = []
        try:
            for i in range_:
                print(i)
                try:
                    # stop time
                    time.sleep(1.5)
                    tmp = self.get_one_pid_df(str(i))
                    if tmp.shape == self.expected_shape:
                        df_list.append(self.get_one_pid_df(str(i)))
                except NoneItemException:
                    continue

        finally:
            self.result_list = df_list
            result = pd.concat(df_list).reset_index(drop=True)
            result.loc[:,'all_name'] = result['name'] + ',' + result['trivial']
            result = result.rename(columns=self.translate)
            result.loc[:,'id'] = result.index.values

            return result


    def save_to_json_file(self):
        df = self.get_entrie_df()

        with open(self.json_file, 'w') as f:
            f.write(df.to_json(force_ascii=False, orient='records'))


