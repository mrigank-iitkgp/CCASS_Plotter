import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, Logarithmic } from '@syncfusion/ej2-react-charts';
import { DatePickerComponent , DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { lineChartData, lineCustomSeries , LinePrimaryXAxis, LinePrimaryYAxis , chartTitle } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Button from '../Button';
import { getAsyncHistoricalHoldings } from '../async';

const floatFocus = (args) => {
  args.target.parentElement.classList.add('e-input-focus');
};
const floatBlur = (args) => {
  args.target.parentElement.classList.remove('e-input-focus');
};
let ChartData = lineCustomSeries;
let ChartTitle = chartTitle;
let shareholdingSeries = [];
const LineChart = (props) => {
  const { currentMode } = useStateContext();
  const [stockData , setStockData] = useState({
    stockCode:"",
    startDate:"",
    endDate:"",
    k:""
  });


  let val , data;
  const handleInputs = (e) => {
    console.log(e)
    data = e.target.name;
    val = e.target.value

    setStockData({...stockData , [data]:val});
  }
  // console.log(stockData.endDate.getFullYear())
  const [chartData , setchartData] = useState(ChartData);
  const [title , setTitle] = useState(ChartTitle);
  const [shareholdingData , setshareholdingData] = useState(shareholdingSeries);
  const postRequest = () => {
    //http://127.0.0.1:8000/api/gettopkshareholders?stockCode=00001&startDate=2022-09-01&endDate=2022-09-02&k=10
    let baseUrl = "http://0.0.0.0:8080/api/gettopkshareholders";
    let startDate = new Date(stockData.startDate);
    var startYear = startDate.toLocaleString("default", { year: "numeric" });
    var startMonth = startDate.toLocaleString("default", { month: "2-digit" });
    var startDay = startDate.toLocaleString("default", { day: "2-digit" });
    var formattedStartDate = startYear + "-" + startMonth + "-" + startDay;
    console.log(formattedStartDate)
    let endDate = new Date(stockData.endDate);
    var endYear = endDate.toLocaleString("default", { year: "numeric" });
    var endMonth = endDate.toLocaleString("default", { month: "2-digit" });
    var endDay = endDate.toLocaleString("default", { day: "2-digit" });
    var formattedEndDate = endYear + "-" + endMonth + "-" + endDay;
    console.log(formattedEndDate)
    let url = baseUrl + "?" + "stockCode=" + stockData.stockCode + "&startDate=" + 
    formattedStartDate + "&endDate=" + 
    formattedEndDate + "&k=" + stockData.k;
    console.log(url)

    const config = {
      headers:{
        'Access-Control-Allow-Origin': 'http://localhost/3000'
      }
    };

    getAsyncHistoricalHoldings(url).then(response =>{
      ChartData = response['Chart'];
      console.log(response);
      ChartTitle = response['Result'].stockName;
      shareholdingSeries = [];
      setchartData(ChartData);
      setTitle(ChartTitle);
      console.log(title);
      for(let idx in ChartData){
        console.log(ChartData[idx].dataSource);
        for(let i in ChartData[idx].dataSource) {
          // console.log(chartData[idx].dataSource[i].x)
          let date = new Date(chartData[idx].dataSource[i].x);
          shareholdingSeries.push(chartData[idx].dataSource[i].y)
          //console.log(date)
          chartData[idx].dataSource[i].x = date;
          // console.log(chartData[idx].dataSource[i].x)
        }
        // console.log(chartData[idx].marker.visible)
        chartData[idx].marker.visible=true;
      }
      // console.log(chartData);
      setshareholdingData(shareholdingSeries);
      console.log(shareholdingData);
      let maxVal = -1;
      let minVal = 1000000000000;
      for(let idx in shareholdingData) {
        maxVal = Math.max(maxVal , shareholdingData[idx]);
        minVal = Math.min(minVal , shareholdingData[idx]);
      }
      console.log(maxVal);
      console.log(minVal);
      LinePrimaryYAxis.maximum = maxVal;
      LinePrimaryYAxis.minimum = minVal;
      LinePrimaryYAxis.interval = maxVal / 10;
    });
  }

  return (
    <div className="container">
        <TooltipComponent id="details" target='.e-info' position='RightCenter'>
      <form id="details" role="form">
          <table>
              <tr>
                  <td>
                      <input type="text" className="e-input" name="stockCode" 
                      value={stockData.stockCode}
                      onChange={handleInputs}
                      placeholder="Enter the stock code" 
                      onFocus={floatFocus} onBlur={floatBlur} />
                  </td>
              </tr>
              <tr>
                  <td>
                      <DatePickerComponent className='e-datepicker e-input' name="startDate" 
                      value={stockData.startDate}
                      onChange={handleInputs}
                      placeholder='Enter the start date'/>
                  </td>
              </tr>
              <tr>
                  <td>
                  <DatePickerComponent className='e-datepicker' name="endDate"
                  value={stockData.endDate}
                  onChange={handleInputs} 
                  placeholder='Enter the end date'/>
                  </td>
              </tr>
              <tr>
                  <td>
                  <input type="text" className="e-input" name="k"
                  value={stockData.k}
                  onChange={handleInputs} 
                  placeholder="Enter the value of k" / >
                  </td>
              </tr>
          </table>
      </form>
    </TooltipComponent>
    <br></br>
    <div className='"mt-6'>
      <Button color="white" bgColor="blue" text="Submit" borderRadius="10px" size="md" postRequest={postRequest}/>
    </div>
    <br></br>
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, Logarithmic]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {chartData.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>
  );
};

export default LineChart;