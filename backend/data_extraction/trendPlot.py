from pickle import HIGHEST_PROTOCOL
from data_extraction.shareholding_search_service import ShareholdingSearchService
from data_extraction.data_manipulation import ShareholdingData
from data_extraction.dataPreparation import DataPreparation

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
        topKShareholders_list = []
        for index , row in topKShareholders['holders'].iterrows():
            shareholders_data = {
                "participant_id" : row['participant_id'],
                "name" : row['name'],
                "address": row['address'],
                "shareholding": row['shareholding'],
                "percent_share": row['percent_share']
            }
            topKShareholders_list.append(shareholders_data)
        topKShareholders['holders'] = topKShareholders_list
        # print(topKShareholders)
        # print(topKShareholders['shareholding_data'])
        chartData = DataPreparation.createLineChartData(topKShareholders)
        return {
            "Result" : topKShareholders,
            "Chart" : chartData
        }

    @staticmethod
    def getChangeData(df , percentage):
        for holders in df['holders']:
            holdings = [
                holding for holding in df['shareholding_data'] if holding['name'] == holders['name']
            ]
            holdings = sorted(holdings , key=lambda x : x['endDate'])
            for idx in range(1 , len(holdings)):
                prevShareholdingData = holdings[idx - 1]['shareholding']
                if not prevShareholdingData:
                    continue
                currShareholdingData = holdings[idx]['shareholding']
                change = currShareholdingData - prevShareholdingData
                changePercentage = (100.0 * change) / prevShareholdingData
                holdings[idx]['shareholdingChange'] = change
                holdings[idx]['shareholdingChangePercent'] = changePercentage
                holdings[idx]['action'] = 'BUY' if change > 0 else 'SELL'
        
        holdingsWithChange = [
            holding for holding in df['shareholding_data']
            if 'shareholdingChange' in holding and abs(holding['shareholdingChangePercent']) > float(percentage)
        ]
        return sorted(holdingsWithChange , key=lambda x : (x['endDate'] , -x['shareholdingChangePercent']))
    
    @staticmethod
    def dailyTransactions(df):
        holdingWithTransactions = []
        endDates = sorted({holding['endDate'] for holding in df})

        for date in endDates:
            data = [holding for holding in df if holding['endDate'] == date]
            if all(action in {tran['action'] for tran in data} for action in ['BUY' , 'SELL']):
               holdingWithTransactions.extend(data) 
        
        return holdingWithTransactions

    @staticmethod
    def getTransactionData(stockCode , shareholdingData_obj , startDate , endDate , k , thresholdPercentage):
        fullShareholderData = shareholdingData_obj.getAllShareholdingData(stockCode , startDate , endDate)
        fullShareholderData = sorted(fullShareholderData , key= lambda x : x['endDate'])
        topKShareholders = shareholdingData_obj.topKShareholders(stockCode , endDate , k)
        topKShareholders['shareholding_data'] = TrendPlotter.filterData(fullShareholderData , topKShareholders)
        topKShareholders_list = []
        for index , row in topKShareholders['holders'].iterrows():
            shareholders_data = {
                "participant_id" : row['participant_id'],
                "name" : row['name'],
                "address": row['address'],
                "shareholding": row['shareholding'],
                "percent_share": row['percent_share']
            }
            topKShareholders_list.append(shareholders_data)
        topKShareholders['holders'] = topKShareholders_list
        holdingDataWithChange = TrendPlotter.getChangeData(topKShareholders , thresholdPercentage)
        holdingDataWithTransaction = TrendPlotter.dailyTransactions(holdingDataWithChange)
        return {
            "stockCode" : stockCode,
            "startDate" : startDate,
            "endDate" : endDate,
            "stockName" : topKShareholders['stockName'],
            "holdingChanges" : holdingDataWithChange,
            "dailyTxn" : holdingDataWithTransaction
        }

# shareholdingData_obj = ShareholdingData()
# test = TrendPlotter()
# # print(test.getPlotData("00001" , shareholdingData_obj , "2022-09-01" , "2022-09-04" , 10))
# print(test.getTransactionData("00003" , shareholdingData_obj , "2022-09-01" , "2022-09-10" , 10 , 1))