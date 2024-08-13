import React from 'react';
import './Home.css';
import Actions from '../../component/Action/Actions';
import Details from '../../component/Detail/Details';

const Home = () => {


  return (
    <div className="home-container">
      <div className="home">
        <p className="breadcrumb">Home &gt; Tours &gt; Phuket</p>
        <p className="title">THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <Actions />
      <div className="home flex flex-col md:flex-row">
        <div className="left-container bg-white rounded-lg p-6 md:w-2/3 mb-4 md:mb-0 move-up">
        <Details />
          <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
          <p className="mb-4">
            The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
            Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
            Maya Bay, immortalized in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
            and drop-off all included.
          </p>
          <h6 className="text-xl font-semibold mb-2">Tour Highlights</h6>
          <ul className="list-disc list-inside mb-4">
            <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
            <li>Be amazed by the variety of marine life in the archipelago</li>
            <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
            <li>Feel the comfort of a tour limited to 35 passengers</li>
            <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
          </ul>
        </div>

        <div className="right-container bg-white shadow-md rounded-lg p-6 md:w-1/3 md:ml-4">
          <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
          <p className="text-lg font-semibold mb-4">From $1,200</p>
          <p className="text-gray-600 mb-4">From February 05 ~ March 14</p>
          <h3 className="text-xl font-semibold mb-2">Time</h3>
          <p className="mb-4">Choose time</p>
          <h3 className="text-xl font-semibold mb-2">Tickets</h3>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Adult (18+ years) $282.00 x 3</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Adult (18+ years) $282.00 x 3</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Adult (18+ years) $282.00 x 3</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Add Extra</h3>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Add Service per booking $40</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Add Service per booking $40</span>
            </div>
          </div>

          <div className="font-bold mb-4">Total: $530.00</div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-600">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
