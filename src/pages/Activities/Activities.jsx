import React from 'react'
import FeaturesAndTravel from '../../component/FeaturesAndTravel/FeaturesAndTravel'

const Activities = () => {
  return (
    <div className="home-container mx-auto p-5 mt-12  max-w-screen-xl flex flex-col">
      <div className="home flex justify-between">
        <p className="breadcrumb font-normal text-xs leading-6">Home &gt; Tours &gt; Phuket</p>
        <p className="title font-normal text-xs leading-6">THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-gray-800 text-[40px]">
          Explore all things to do in Phuket
        </h2>
      </div>
      <FeaturesAndTravel />
    </div>
  )
}

export default Activities
