import React from 'react';
import { cardData } from './Data';
import { Typography } from '../Typography/Typography';

const CardCarousel = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">You might also like...</h1>

            <div className="flex overflow-x-auto space-x-4 sm:space-x-4 pb-4">
                {cardData?.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-48 sm:w-56 md:w-64 flex-shrink-0">
                        <img src={item.imageUrl} alt="Card image" className="w-full h-32 sm:h-36 md:h-48 object-cover" />
                        <div className="p-3 sm:p-4">
                            <div className="text-xs sm:text-sm text-gray-600 mt-1">{item.location}</div>
                            <div className="text-sm sm:text-base md:text-lg text-gray-800">{item.tourTitle}</div>
                            <div className="text-center mt-2 text-xs sm:text-sm text-gray-500">
                                {item.rating}
                            </div>
                            <hr className="my-3 border-gray-300" />
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                                <div className="text-gray-600">{item.duration}</div>
                                <div className="font-bold text-gray-800">
                                    <Typography variant='text'>
                                        From<span className='ml-1 font-bold'>{item.price}</span>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
