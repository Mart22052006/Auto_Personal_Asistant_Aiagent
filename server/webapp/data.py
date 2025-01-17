import requests
from bs4 import BeautifulSoup
from lxml import etree


#  从https://www.boxofficemojo.com/chart/top_lifetime_gross/?area=XWW 获取前10条的列表url

def get_top_movie_url() -> list:
    url = 'https://www.boxofficemojo.com/chart/top_lifetime_gross/?area=XWW'
    response = requests.get(url)
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'lxml')
        # xpath://*[@id="table"]/div/table[2]/tbody/tr   [2]/td[2]
        #    #table > div > table.a-bordered.a-horizontal-stripes.a-size-base.a-span12.mojo-body-table.mojo-table-annotated.scrolling-data-table > tbody > tr:nth-child(2)
        trs = soup.select(
            'table tbody tr')
        urls = []
        for tr in trs[:10]:
            url = tr.select_one('a')['href']
            urls.append(f'https://www.boxofficemojo.com{url}')
    else:
        return []

    return urls


def test_get_top_movie_url():
    urls = get_top_movie_url()
    print(urls)
