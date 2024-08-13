import React from 'react';
import './Home.css';
import Actions from '../../component/Action/Actions';
import Booking from '../../component/Booking/Booking';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home">
        <p className="breadcrumb">Home &gt; Tours &gt; Phuket</p>
        <p className="title">THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <Actions />
      <Booking />
    </div>
  );
};

export default Home;
