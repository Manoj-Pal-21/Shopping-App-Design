import React from 'react';
import Actions from '../../component/Action/Actions';
import Booking from '../../component/Booking/Booking';

const Home = () => {

  return (
    <div className="home-container mx-auto p-5 max-w-screen-xl flex flex-col">
      <div className="home flex justify-between">
        <p className="breadcrumb font-normal text-xs leading-6">Home &gt; Tours &gt; Phuket</p>
        <p className="title font-normal text-xs leading-6">THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <Actions />
      <Booking />
    </div>
  );
};

export default Home;
