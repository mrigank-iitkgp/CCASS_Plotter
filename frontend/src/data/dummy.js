import React from 'react';
import axios from 'axios';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
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
          name: 'pie',
          icon: <FiPieChart />,
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
    maximum: 1332290463,
    interval: 100000000,
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

  