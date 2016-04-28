# coding=UTF-8
import requests
from bs4 import BeautifulSoup
import pandas as pd


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
        self.pid_range = range(150, 161)
        self.required_nutrition = ['熱量', '水分', '粗蛋白', '粗脂肪'
                               ,'總碳水化合物']
        self.required_entry = '每單位重'

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

        name = soup.find('span', id='lbFoodName').text
        trivial = soup.find('span', id='lbTrivialName').text

        table = soup.find('table', id='GridView1')
        if table is None:
            raise NoneItemException

        df = pd.read_html(str(table), header=0, index_col=1)[0]
        df = df.loc[self.required_nutrition].filter(regex=self.required_entry).T.reset_index(drop=True)
        df.loc[:, 'name'] = name
        df.loc[:, 'trivial'] = trivial


        return df


    def get_entrie_df(self):
        """

        """

        df_list = []
        for i in self.pid_range:
            try:
                df_list.append(self.get_one_pid_df(str(i)))
            except NoneItemException:
                continue

        result = pd.concat(df_list).reset_index(drop=True)

        return result
