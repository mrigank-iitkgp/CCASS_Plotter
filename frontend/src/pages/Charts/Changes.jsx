import React from 'react'
import { Header , Changesdata } from '../../components';

const Changes = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Transaction Finder" />
      <div className="w-full">
        <Changesdata />
      </div>
    </div>
  )
}
export default Changes