# coding=UTF-8
import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import json


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
        self.pid_range = range(0, 2100)
        self.required_nutrition = ['修正熱量', '水分', '粗蛋白', '粗脂肪'
                               ,'總碳水化合物']
        self.required_entry = '每單位重'
        self.translate = {
            '修正熱量': 'calories',
            '粗蛋白': 'protein',
            '水分': 'water',
            '粗脂肪': 'fat',
            '總碳水化合物': 'carbs'
        }
        self.expected_shape = (1, len(self.required_nutrition) +4)

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
        df = df.loc[self.required_nutrition].filter(regex=self.required_entry).T.reset_index(drop=True)
        df.loc[:, 'name'] = name
        df.loc[:, 'trivial'] = trivial
        df.loc[:, 'category'] = category
        df.loc[:, 'piece_weight'] = piece_weight

        return df


    def get_entrie_df(self):
        """

        """

        df_list = []
        try:
            for i in self.pid_range:
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


    def json_to_search_content(self):
        with open(self.json_file) as f:
            data = json.loads(f.read())

        result = []
        for key, value in data.items():
            result.append('<' + key + '_' + value['all_name'] + '>')

        result = ''.join(result)

        with open(self.search_content_file, 'w') as f:
            f.write(result)

