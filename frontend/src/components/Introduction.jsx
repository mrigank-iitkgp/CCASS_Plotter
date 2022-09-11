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
              <p className="font-bold text-gray-400">Hey There!!</p>
              <p className="text-2x1"> Explore the menu for different functionalities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction