import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids';
import { shareholding_data, shareholdingtMenuItems, shareholdingGrid } from '../data/dummy';
import { Header } from '../components';
import { useState } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Button } from '../components';
import { getAsyncHistoricalHoldings } from '../components/async';

const floatFocus = (args) => {
  args.target.parentElement.classList.add('e-input-focus');
};
const floatBlur = (args) => {
  args.target.parentElement.classList.remove('e-input-focus');
};
let ChartData = shareholding_data;

const Datatable = () => {
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
  const postRequest = () => {
    //http://127.0.0.1:8000/api/gettopkshareholders?stockCode=00001&startDate=2022-09-01&endDate=2022-09-02&k=10
    let baseUrl = "http://mgk-env.eba-vcnc7sev.ap-south-1.elasticbeanstalk.com/api/gettopkshareholders";
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
      console.log(response)
      ChartData = response.Result.shareholding_data;
      console.log(ChartData);
      setchartData(ChartData);
    });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="DataTable" />
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
      <GridComponent
        id="gridcomp"
        dataSource={chartData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={shareholdingtMenuItems}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {shareholdingGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Datatable;