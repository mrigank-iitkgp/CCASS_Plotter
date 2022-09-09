from datetime import date , datetime , timedelta
from data_extraction.shareholding_search_service import ShareholdingSearchService
import pandas as pd

class ShareholdingData(object):
    def __init__(self):
        self.currentDate = date.today().strftime("%Y%m%d")
        self.shareholdingSearch = ShareholdingSearchService()
        self.allShareholdingData = []
    
    @staticmethod
    def getDateRange(startDate , endDate):
        start = datetime.strptime(startDate , "%Y-%m-%d")
        end = datetime.strptime(endDate , "%Y-%m-%d")
        datesGenerated = [start + timedelta(days=x) for x in range(0, (end-start).days + 1)]
        dateRange = [date.strftime("%Y-%m-%d") for date in datesGenerated]
        return dateRange
    
    def getAllShareholdingData(self , stockCode , startDate , endDate):
        dateRange = ShareholdingData.getDateRange(startDate , endDate)
        for date in dateRange:
            data = self.shareholdingSearch.getShareholdingData(stockCode , self.currentDate , date)
            self.allShareholdingData.append(data)
        # print(self.allShareholdingData)
        return self.allShareholdingData

    def topKShareholders(self , stockCode , endDate , k):
        shareholdingData = self.shareholdingSearch.getShareholdingData(stockCode , self.currentDate , endDate)
        topHolders = shareholdingData['shareholding_data'].nlargest(k , ['shareholding'])
        # print(topHolders)
        return {
            "shareholdingDate" : shareholdingData['endDate'],
            "stockCode" : shareholdingData['stockCode'],
            "stockName" : shareholdingData['stockName'],
            "holders" : topHolders
        }


# test = ShareholdingData()
# test.getAllShareholdingData("00001" , "2022-08-01" , "2022-08-03")
# test.topKShareholders("00001" , "2022-08-01" , 10)

