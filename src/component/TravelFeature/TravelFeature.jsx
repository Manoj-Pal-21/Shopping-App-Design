import React from 'react';

const TravelFeature = () => {
    return (
        <div className="w-full bg-white rounded-lg shadow-md p-4 space-y-4">
            {/* Travel Dates */}
            <div className="bg-orange-500 p-4 rounded-md">
                <div className="text-sm mb-2 leading-tight">
                    When are you traveling?
                </div>
                <div className="mb-4 flex justify-center">
                    <span className="bg-gray-200 p-2 rounded-md text-xs md:text-sm lg:text-base">
                        July 05 ~ Aug 14
                    </span>
                </div>
            </div>

            {/* Tour Types */}
            <div className="space-y-2">
                <div className="font-semibold text-sm md:text-base lg:text-lg">
                    Tour Type
                </div>
                <div className="flex flex-col space-y-2">
                    {['Nature Tours', 'Adventure Tours', 'Cultural Tours', 'Food Tours', 'City Tours', 'Cruises Tours'].map((type) => (
                        <div key={type} className="flex items-center">
                            <input type="checkbox" id={type.replace(/\s+/g, '-').toLowerCase()} className="mr-2" />
                            <label htmlFor={type.replace(/\s+/g, '-').toLowerCase()} className="text-xs md:text-sm lg:text-base">
                                {type}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* See More Button */}
            <button className="mt-4 text-blue-500 underline text-xs md:text-sm lg:text-base p-4">
                See More
            </button>

            {/* Filters */}
            <div className="space-y-4">
                {['Filter Price', 'Duration', 'Rating', 'Specials'].map((filter) => (
                    <div key={filter} className="space-y-2">
                        <div className="border-t border-gray-300"></div>
                        <div className="font-semibold text-sm md:text-base lg:text-lg">{filter}</div>              
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelFeature;
