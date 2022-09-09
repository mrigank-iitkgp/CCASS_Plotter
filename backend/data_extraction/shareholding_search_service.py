from ast import parse
from curses import meta
import requests
import json
import os
from bs4 import BeautifulSoup
import pandas as pd

class ShareholdingSearchService(object):
    def __init__(self):
        self.wkdir = os.path.dirname(__file__)
        self.metaFilePath = os.path.join(self.wkdir , "meta.json")
        self.headerFilePath = os.path.join(self.wkdir , "headers.json")
        with open(self.metaFilePath) as f:
            metaFile = json.load(f)
        self.url = metaFile['url']
    
    @staticmethod
    def postBodyCreation(stockCode , currentDate , shareholdingDate) -> dict:
        return {
            "MIME Type":"application/x-www-form-urlencoded",
            "__EVENTTARGET":"btnSearch",
            "__EVENTARGUMENT":"",
            "__VIEWSTATE":"/wEPDwUKMTY0ODYwNTA0OWRkVb0Z6/twMzkjq6As1zABy65ev+E=",
            "__VIEWSTATEGENERATOR":"A7B2BBE2",
            "today":currentDate,
            "sortBy":"shareholding",    
            "sortDirection":"desc",
            "txtShareholdingDate":shareholdingDate,
            "txtStockCode":stockCode
        }
    
    @staticmethod
    def dataParser(soup):
        columns = ["participant_id" , "name" , "address" , "shareholding" , "percent_share"]
        stepSize = 5;
        res = []
        try:
            stockName = soup.find("input" , {"name":"txtStockName"}).get('value')
            if stockName == None:
                stockName = ""
            table = soup.find_all("div" , class_="mobile-list-body")
            for i in range (0 , len(table) , stepSize):
                values = []
                for val in table[i : i + stepSize]:
                    values.append(val.get_text())
                res.append(values)
            df = pd.DataFrame(res , columns=columns)
            df["participant_id"] = df["participant_id"].astype(str)
            df["name"] = df["name"].astype(str)
            df["address"] = df["address"].astype(str)
            df["shareholding"] = df["shareholding"].str.replace("," , "").astype(int)
            df["percent_share"] = df["percent_share"].str.replace("%" , "").astype(float)
            # print(df.dtypes)
            # print(df.head())
        except Exception as e:
            print(f"Error finding the shareholding data : {str(e)}")
        finally:
            return stockName , df



    def getShareholdingData(self , stockCode , currentDate , shareholdingDate):
        
        requestSession = requests.session()
        with open(self.headerFilePath) as f:
            header = json.load(f)
        body = ShareholdingSearchService.postBodyCreation(stockCode , currentDate , shareholdingDate)
        response = requestSession.post(self.url , headers=header , data=body)
        soup = BeautifulSoup(response.content , "lxml")
        stockName , parsed_df = ShareholdingSearchService.dataParser(soup)
        holdingsDataMap = {
            "stockCode" : stockCode,
            "stockName" : stockName,
            "endDate" : shareholdingDate,
            "shareholding_data" : parsed_df
        }
        return holdingsDataMap

# Object creation for testing purpose

# test = ShareholdingSearchService()
# test.getShareholdingData("00001" , "20220909" , "2022/09/07")