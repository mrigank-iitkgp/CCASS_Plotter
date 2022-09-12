import React from 'react';
import axios from 'axios';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock , AiOutlineTable } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft , BsGraphUp } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md'
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';


export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Introduction',
          icon: <MdSpaceDashboard />,
        },
      ],
    },

    {
      title: 'Charts',
      links: [
        {
          name: 'line',
          icon: <AiOutlineStock />,
        },
        {
          name: 'datatable',
          icon: <AiOutlineTable />,
        },
        {
          name: 'dailychanges',
          icon: <BsGraphUp />,
        },
      ],
    },
  ];

  const topKShareholders = "http://127.0.0.1:8000/api/gettopkshareholders";
  

  export const lineChartData = [
    [
      { x: new Date(2005, 2, 1), y: 21 },
      { x: new Date(2006, 3, 1), y: 24 },
      { x: new Date(2007, 4, 1), y: 36 },
      { x: new Date(2008, 5, 1), y: 38 },
      { x: new Date(2009, 6, 1), y: 54 },
      { x: new Date(2010, 7, 1), y: 57 },
      { x: new Date(2011, 8, 1), y: 70 },
    ],
    [
      { x: new Date(2005, 2, 1), y: 28 },
      { x: new Date(2006, 3, 1), y: 44 },
      { x: new Date(2007, 4, 1), y: 48 },
      { x: new Date(2008, 5, 1), y: 50 },
      { x: new Date(2009, 6, 1), y: 66 },
      { x: new Date(2010, 7, 1), y: 78 },
      { x: new Date(2011, 8, 1), y: 84 },
    ],
  
    [
      { x: new Date(2005, 2, 1), y: 10 },
      { x: new Date(2006, 3, 1), y: 20 },
      { x: new Date(2007, 4, 1), y: 30 },
      { x: new Date(2008, 5, 1), y: 39 },
      { x: new Date(2009, 6, 1), y: 50 },
      { x: new Date(2010, 7, 1), y: 70 },
      { x: new Date(2011, 8, 1), y: 100 },
    ],
  ];

  export const chartTitle = "CK HUTCHISON HOLDINGS LIMITED";

  export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'dd MMM yyyy',
    intervalType: 'Days',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
  export const LinePrimaryYAxis = {
    labelFormat: '{value}',
    rangePadding: 'None',
    minimum: 0,
    maximum: 9999999999,
    interval: 1000000000,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'England',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'India',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];

  export const shareholding_data = 
  [
    {
      "endDate":"2022-09-01",
      "participant_id":"C00019",
      "name":"THE HONGKONG AND SHANGHAI BANKING",
      "address":"HSBC WEALTH BUSINESS SERVICES 8/F TOWER 2 & 3 H...",
      "shareholding":1232290463,
      "percent_share":32.13
    },
    {
      "endDate":"2022-09-01",
      "participant_id":"C00010",
      "name":"CITIBANK N.A.",
      "address":"9/F CITI TOWER ONE BAY EAST 83 HOI BUN ROAD KWU...",
      "shareholding":255127089,
      "percent_share":6.65
    },
    {
      "endDate":"2022-09-02",
      "participant_id":"C00019",
      "name":"THE HONGKONG AND SHANGHAI BANKING",
      "address":"HSBC WEALTH BUSINESS SERVICES 8/F TOWER 2 & 3 H...",
      "shareholding":1231191265,
      "percent_share":32.1
    },
    {
      "endDate":"2022-09-02",
      "participant_id":"C00010",
      "name":"CITIBANK N.A.",
      "address":"9/F CITI TOWER ONE BAY EAST 83 HOI BUN ROAD KWU...",
      "shareholding":254333750,
      "percent_share":6.63
    }
  ]


  export const shareholdingtMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Save',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];
  
  export const shareholdingGrid = [
    {
      field: 'participant_id',
      headerText: 'Participant ID',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'name',
      headerText: 'Name',
      width: '200',
      textAlign: 'Center',
    },
    { field: 'endDate',
      headerText: 'Date',
      width: '120',
      textAlign: 'Center',
    },
    {
      field: 'shareholding',
      headerText: 'Total Shareholding',
      // format: 'C2',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'percent_share',
      headerText: 'Percent Share',
      // format: 'C2',
      textAlign: 'Center',
      width: '100',
    },
  
    {
      field: 'address',
      headerText: 'Address',
      width: '200',
      textAlign: 'Center',
    },
  ];
  
  export const holdingChanges = [
    {
        "endDate": "2022-09-02",
        "participant_id": "C00093",
        "name": "BNP PARIBAS SECURITIES SERVICES",
        "address": "21/F PCCW TOWER TAIKOO PLACE 979 KING'S ROAD QU...",
        "shareholding": 32265491,
        "percent_share": 0.84,
        "shareholdingChange": 1510422,
        "shareholdingChangePercent": 4.911131885283691,
        "action": "BUY",
    },
    {
        "endDate": "2022-09-02",
        "participant_id": "B01161",
        "name": "UBS SECURITIES HONG KONG LTD",
        "address": "47-52/F TWO INTERNATIONAL FINANCE CENTRE 8 FINA...",
        "shareholding": 63574852,
        "percent_share": 1.65,
        "shareholdingChange": 1939158,
        "shareholdingChangePercent": 3.1461607295279257,
        "action": "BUY",
    },
    {
        "endDate": "2022-09-05",
        "participant_id": "C00093",
        "name": "BNP PARIBAS SECURITIES SERVICES",
        "address": "21/F PCCW TOWER TAIKOO PLACE 979 KING'S ROAD QU...",
        "shareholding": 33468891,
        "percent_share": 0.87,
        "shareholdingChange": 1203400,
        "shareholdingChangePercent": 3.729681349030145,
        "action": "BUY",
    },
    {
        "endDate": "2022-09-05",
        "participant_id": "C00010",
        "name": "CITIBANK N.A.",
        "address": "9/F CITI TOWER ONE BAY EAST 83 HOI BUN ROAD KWU...",
        "shareholding": 250122410,
        "percent_share": 6.52,
        "shareholdingChange": -4211340,
        "shareholdingChangePercent": -1.6558321496852069,
        "action": "SELL",
    },
    {
        "endDate": "2022-09-07",
        "participant_id": "C00093",
        "name": "BNP PARIBAS SECURITIES SERVICES",
        "address": "21/F PCCW TOWER TAIKOO PLACE 979 KING'S ROAD QU...",
        "shareholding": 33302929,
        "percent_share": 0.86,
        "shareholdingChange": -354102,
        "shareholdingChangePercent": -1.0520892350843425,
        "action": "SELL",
    },
    {
        "endDate": "2022-09-08",
        "participant_id": "C00010",
        "name": "CITIBANK N.A.",
        "address": "9/F CITI TOWER ONE BAY EAST 83 HOI BUN ROAD KWU...",
        "shareholding": 264373137,
        "percent_share": 6.89,
        "shareholdingChange": 14088809,
        "shareholdingChangePercent": 5.6291215325315935,
        "action": "BUY",
    },
    {
        "endDate": "2022-09-08",
        "participant_id": "C00100",
        "name": "JPMORGAN CHASE BANK, NATIONAL",
        "address": "18/F TOWER 2 THE QUAYSIDE 77 HOI BUN ROAD KWUN ...",
        "shareholding": 248154530,
        "percent_share": 6.47,
        "shareholdingChange": -3013678,
        "shareholdingChangePercent": -1.199864435072133,
        "action": "SELL",
    },
    {
        "endDate": "2022-09-08",
        "participant_id": "C00093",
        "name": "BNP PARIBAS SECURITIES SERVICES",
        "address": "21/F PCCW TOWER TAIKOO PLACE 979 KING'S ROAD QU...",
        "shareholding": 28607877,
        "percent_share": 0.74,
        "shareholdingChange": -4695052,
        "shareholdingChangePercent": -14.098015222625014,
        "action": "SELL",
    },
]

export const dailyTxn = [
  {
      "endDate": "2022-09-05",
      "participant_id": "C00093",
      "name": "BNP PARIBAS SECURITIES SERVICES",
      "address": "21/F PCCW TOWER TAIKOO PLACE 979 KING'S ROAD QU...",
      "shareholding": 33468891,
      "percent_share": 0.87,
      "shareholdingChange": 1203400,
      "shareholdingChangePercent": 3.729681349030145,
      "action": "BUY",
  },
  {
      "endDate": "2022-09-05",
      "participant_id": "C00010",
      "name": "CITIBANK N.A.",
      "address": "9/F CITI TOWER ONE BAY EAST 83 HOI BUN ROAD KWU...",
      "shareholding": 250122410,
      "percent_share": 6.52,
      "shareholdingChange": -4211340,
      "shareholdingChangePercent": -1.6558321496852069,
      "action": "SELL",
  },
  {
      "endDate": "2022-09-08",
      "participant_id": "C00010",
      "name": "CITIBANK N.A.",
      "address": "9/F CITI TOWER ONE BAY EAST 83 HOI BUN ROAD KWU...",
      "shareholding": 264373137,
      "percent_share": 6.89,
      "shareholdingChange": 14088809,
      "shareholdingChangePercent": 5.6291215325315935,
      "action": "BUY",
  },
  {
      "endDate": "2022-09-08",
      "participant_id": "C00100",
      "name": "JPMORGAN CHASE BANK, NATIONAL",
      "address": "18/F TOWER 2 THE QUAYSIDE 77 HOI BUN ROAD KWUN ...",
      "shareholding": 248154530,
      "percent_share": 6.47,
      "shareholdingChange": -3013678,
      "shareholdingChangePercent": -1.199864435072133,
      "action": "SELL",
  },
  {
      "endDate": "2022-09-08",
      "participant_id": "C00093",
      "name": "BNP PARIBAS SECURITIES SERVICES",
      "address": "21/F PCCW TOWER TAIKOO PLACE 979 KING'S ROAD QU...",
      "shareholding": 28607877,
      "percent_share": 0.74,
      "shareholdingChange": -4695052,
      "shareholdingChangePercent": -14.098015222625014,
      "action": "SELL",
  },
]


export const holdingMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Save',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const holdingGrid = [
  {
    field: 'participant_id',
    headerText: 'Participant ID',
    width: '150',
    textAlign: 'Center',
  },
  { field: 'name',
    headerText: 'Name',
    width: '200',
    textAlign: 'Center',
  },
  { field: 'endDate',
    headerText: 'Date',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'shareholding',
    headerText: 'Total Shareholding',
    // format: 'C2',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'shareholdingChange',
    headerText: 'Change in Shareholding',
    // format: 'C2',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'percent_share',
    headerText: '% Share',
    // format: 'C2',
    textAlign: 'Center',
    width: '100',
  },
  {
    field: 'shareholdingChangePercent',
    headerText: 'Change in % Share',
    // format: 'C2',
    textAlign: 'Center',
    width: '100',
  },
];


export const txnMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Save',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const txnGrid = [
  {
    field: 'participant_id',
    headerText: 'Participant ID',
    width: '150',
    textAlign: 'Center',
  },
  { field: 'name',
    headerText: 'Name',
    width: '200',
    textAlign: 'Center',
  },
  { field: 'endDate',
    headerText: 'Date',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'shareholdingChange',
    headerText: 'Change in Shareholding',
    // format: 'C2',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'shareholdingChangePercent',
    headerText: 'Change in % Share',
    // format: 'C2',
    textAlign: 'Center',
    width: '100',
  },
  {
    field: 'action',
    headerText: 'Action',
    // format: 'C2',
    textAlign: 'Center',
    width: '100',
  },
];