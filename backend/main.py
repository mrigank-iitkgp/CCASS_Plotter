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


@app.get("/api/gettopkshareholders")
def get_top_k_shareholders(stockCode , startDate , endDate , k):
    result = TrendPlotter.getPlotData(stockCode , ShareholdingData() , startDate , endDate , int(k))
    return result