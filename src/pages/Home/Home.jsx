import React from 'react';
import Actions from '../../component/Action/Actions';
import Booking from '../../component/Booking/Booking';
import Package from '../../component/Package/Package';
import RoadMap from '../../component/RoadMap/RoadMap';
import EarthMap from '../../component/Maps/EarthMap';
import Calander from '../../component/Calander/Calander';
import Faq from '../../component/Faq/Faq';
import Reviews from '../../component/Reviews/Reviews';
import Contact from '../../component/Contact/Contact';
import CardCarousel from '../../component/CardCarousel/CardCarousel';
import Profile from '../../component/Profile/Profile';


const Home = () => {

  return (
    <div className="home-container mx-auto p-5 mt-12 max-w-screen-xl flex flex-col">
      <div className="home flex justify-between">
        <p className="breadcrumb font-normal text-xs leading-6">Home &gt; Tours &gt; Phuket</p>
        <p className="title font-normal text-xs leading-6">THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <Actions />
      <Booking />
      <Package />
      <RoadMap />
      <EarthMap />
      <Calander />
      <Faq />
      <Reviews />
      <Profile />
      <Contact />
      <CardCarousel />
    </div>
  );
};

export default Home;
