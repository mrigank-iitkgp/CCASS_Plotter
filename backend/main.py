from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data_extraction.trendPlot import TrendPlotter
from data_extraction.data_manipulation import ShareholdingData
import json

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# http://127.0.0.1:8000/api/gettopkshareholders?stockCode=00001&startDate=2022-09-01&endDate=2022-09-02&k=2

@app.get("/api/gettopkshareholders")
def get_top_k_shareholders(stockCode , startDate , endDate , k):
    result = TrendPlotter.getPlotData(stockCode , ShareholdingData() , startDate , endDate , int(k))
    return result


# http://0.0.0.0:8080/api/gettransactions?stockCode=00001&startDate=2022-09-01&endDate=2022-09-02&k=2&thresholdPercentage=1
@app.get("/api/gettransactions")
def get_transactions(stockCode , startDate , endDate , k , thresholdPercentage):
    result = TrendPlotter.getTransactionData(stockCode , ShareholdingData() , startDate , endDate , int(k) , float(thresholdPercentage))
    return result