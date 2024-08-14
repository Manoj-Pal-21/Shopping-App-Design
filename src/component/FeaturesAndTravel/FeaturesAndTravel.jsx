import React from 'react';
import TravelFeature from '../TravelFeature/TravelFeature';
import TravelCards from '../TravelCards/TravelCards';

const FeaturesAndTravel = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            {/* Left Sidebar */}
            <div className="flex-shrink-0 md:w-1/4 lg:w-1/5">
                <TravelFeature />
            </div>
            {/* Right Content */}
            <div className="flex-grow">
                <TravelCards />
            </div>
        </div>
    );
};

export default FeaturesAndTravel;
