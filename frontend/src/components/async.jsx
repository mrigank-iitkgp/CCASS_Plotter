import React from 'react';

const generateUrl = (code , date1 , date2 , n) => {
    let baseUrl = "http://127.0.0.1:8000/api/gettopkshareholders";
    let startDate = new Date(date1);
    var startYear = startDate.toLocaleString("default", { year: "numeric" });
    var startMonth = startDate.toLocaleString("default", { month: "2-digit" });
    var startDay = startDate.toLocaleString("default", { day: "2-digit" });
    var formattedStartDate = startYear + "-" + startMonth + "-" + startDay;
    console.log(formattedStartDate)
    let endDate = new Date(date2);
    var endYear = endDate.toLocaleString("default", { year: "numeric" });
    var endMonth = endDate.toLocaleString("default", { month: "2-digit" });
    var endDay = endDate.toLocaleString("default", { day: "2-digit" });
    var formattedEndDate = endYear + "-" + endMonth + "-" + endDay;
    console.log(formattedEndDate)
    let url = baseUrl + "?" + "stockCode=" + code + "&startDate=" + 
    formattedStartDate + "&endDate=" + 
    formattedEndDate + "&k=" + n;
    return url;
};

const getAsyncHistoricalHoldings = async (url) => {
    return (await fetch(url)).json();
};


export {getAsyncHistoricalHoldings , generateUrl};