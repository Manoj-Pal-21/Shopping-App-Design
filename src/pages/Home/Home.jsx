import React from 'react';
import './Home.css';
import Actions from '../../component/Action/Actions';
import Details from '../../component/Detail/Details';

const Home = () => {


  return (
    <div className="home-container">
      <div className="home">
        <p className="breadcrumb">Home > Tours > Phuket</p>
        <p className="title">THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <Actions />
      <Details />
    </div>
  );
};

export default Home;
