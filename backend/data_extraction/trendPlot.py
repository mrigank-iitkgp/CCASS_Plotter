from shareholding_search_service import ShareholdingSearchService
from data_manipulation import ShareholdingData

class TrendPlotter:
    def __init__(self):
        pass

    @staticmethod
    def filterData(fullShareholderData , topKShareholders):
        shareholding_data = []
        for holderData in fullShareholderData:
            endDate = holderData['endDate']
            for participant_id in topKShareholders['holders']['participant_id']:
                df = holderData['shareholding_data']
                # print(df)
                holdingData = df.loc[df['participant_id'] == participant_id]
                endDate_holding = {
                    "endDate" : endDate,
                    "participant_id" : participant_id,
                    "name" : holdingData['name'].to_string(index=False),
                    "address" : holdingData['address'].to_string(index=False),
                    "shareholding" : int(holdingData['shareholding'].to_string(index=False)),
                    "percent_share" : float(holdingData['percent_share'].to_string(index=False))
                }
                shareholding_data.append(endDate_holding)
        return shareholding_data


    @staticmethod
    def getPlotData(stockCode , shareholdingData_obj , startDate , endDate , k):
        fullShareholderData = shareholdingData_obj.getAllShareholdingData(stockCode , startDate , endDate)
        fullShareholderData = sorted(fullShareholderData , key= lambda x : x['endDate'])
        topKShareholders = shareholdingData_obj.topKShareholders(stockCode , endDate , k)
        topKShareholders['shareholding_data'] = TrendPlotter.filterData(fullShareholderData , topKShareholders)
        # print(topKShareholders['shareholding_data'])
        return topKShareholders



# shareholdingData_obj = ShareholdingData()
# test = TrendPlotter()
# test.getPlotData("00001" , shareholdingData_obj , "2022-09-01" , "2022-09-04" , 10)
