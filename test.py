import requests
import pandas as pd
s = requests.session()
url = "https://www3.hkexnews.hk/sdw/search/ccass_stock_list.htm?sortby=stockcode&shareholdingdate=20220906"

r = s.get(url)

test = pd.read_html(r.text)
print(test)

