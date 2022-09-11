from datetime import datetime

class DataPreparation():
    @staticmethod
    def createLineChartData(df):
        line_data = []
        top_holders = [holders for holders in df['holders']]
        for holders in top_holders:
            holdingsPerHolder = [
            holding for holding in df['shareholding_data']
            if holding['name'] == holders['name']
            ]
            line_dict = {
                'dataSource': [
                    {
                        'x' : shares["endDate"],
                        'y' : shares['shareholding'] if shares['shareholding'] else 0.00001
                    }
                    for shares in holdingsPerHolder
                ],
                'xName': 'x',
                'yName': 'y',
                'name': holders['name'],
                'width': '2',
                'marker': { 'visible': 'true', 'width': 10, 'height': 10 },
                'type': 'Line'
            }
            line_data.append(line_dict)
        return line_data
    