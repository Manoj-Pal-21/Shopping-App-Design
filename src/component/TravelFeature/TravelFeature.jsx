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

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <div
                    className="font-semibold"
                    style={{ fontSize: '17.3px', lineHeight: '10px' }}
                >
                    Tour Type
                </div>
                <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4">
                    {['Nature Tours', 'Adventure Tours', 'Cultural Tours', 'Food Tours', 'City Tours', 'Cruises Tours'].map((type) => (
                        <div key={type} className="flex items-center">
                            <input
                                type="checkbox"
                                id={type.replace(/\s+/g, '-').toLowerCase()}
                                className="mr-2 h-4 w-4"
                            />
                            <label
                                htmlFor={type.replace(/\s+/g, '-').toLowerCase()}
                                className="text-sm"
                                style={{ lineHeight: '1.5' }}
                            >
                                {type}
                            </label>
                        </div>
                    ))}
                </div>
            </div>


            {/* See More Button */}
            <button button className="mt-2 text-blue-500 underline text-xs md:text-sm lg:text-base p-2" >
                See More
            </button>

            {/* Filters */}
            <div div className="space-y-2" >
                {
                    ['Filter Price', 'Duration', 'Rating', 'Specials'].map((filter) => (
                        <div key={filter}>
                            <div className="border-t border-gray-300"></div>
                            <div className="font-semibold text-sm md:text-base lg:text-lg">{filter}</div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default TravelFeature;
