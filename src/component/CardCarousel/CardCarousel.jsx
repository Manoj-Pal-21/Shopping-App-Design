import React from 'react';
import { cardData } from './Data';
import { Typography } from '../Typography/Typography';

const CardCarousel = () => {
    return (
        <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl leading-[45px] font-bold mb-6">You might also like...</h1>

            <div className="flex overflow-x-auto space-x-6 pb-4">
                {/* Card */}
                {cardData?.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-64 flex-shrink-0">
                        {/* Card Image */}
                        <img src={item.imageUrl} alt="Card image" className="w-full h-48 object-cover" />
                        {/* Card Content */}
                        <div className="p-4">
                            {/* Location */}
                            <div className="text-[12.29px] leading-[24.38px]  text-gray-600 mt-1 ">{item.location}</div>
                            {/* Tour Info */}
                            <div className="text-[15.88px] leading-[24px]  text-gray-800">{item.tourTitle}</div>
                            {/* Rating */}
                            <div className="text-center mt-2 text-[12.49px] leading-[24.38px] text-yellow-500">
                                {item.rating}
                            </div>
                            {/* Horizontal Line */}
                            <hr className="my-4 border-gray-300" />
                            {/* Duration & Price */}
                            <div className="flex justify-between items-center">
                                <div className="text-[12.59px] leading-[24.38px] text-gray-600">{item.duration}</div>
                                <div className="font-bold text-gray-800">
                                    <Typography variant='text'>
                                        From<span className='ml-[10px] font-bold'>{item.price}</span>
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
