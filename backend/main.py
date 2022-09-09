from fastapi import FastAPI
from data_extraction.trendPlot import TrendPlotter
from data_extraction.data_manipulation import ShareholdingData
import json

app = FastAPI()

@app.get("/api/gettopkshareholders")
def get_top_k_shareholders(stockCode , startDate , endDate , k):
    result = TrendPlotter.getPlotData(stockCode , ShareholdingData() , startDate , endDate , int(k))
    return result