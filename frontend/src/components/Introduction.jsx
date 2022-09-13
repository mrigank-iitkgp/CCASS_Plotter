import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';


const Introduction = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full
        lg:w-full p-8 pt-6 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Welcome to CCASS Plotter!!</p>
              <p className="font-bold"> Refer to charts section for different functionalities
                <ul className="font-extralight">
                  1. Line page provides the trend plot of the top shareholders for specific stock code
                </ul>
                <ul className="font-extralight">
                  2. Datatable page gives the full data of the top shareholder for the specific stock code
                </ul>
                <ul className="font-extralight">
                  3. Daily changes page gives functionality of transaction finder
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;