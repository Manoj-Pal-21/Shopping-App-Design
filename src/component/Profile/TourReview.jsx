import React from 'react';

const TourReview = ({ user, date, subtitle, description, images }) => {
  return (
    <div className="p-8 max-w-[42rem]">
      {/* User Info Section */}
      <div className="flex items-center mb-6">
        {/* User Icon and Username */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold">{user.initials}</span>
        </div>
        <div className="ml-4 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-[15.38px] leading-[30px] font-semibold">{user.name}</h1>
            <p className="text-[13.78px] leading-[26.25px] text-[#717171]">{date}</p>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <h2 className="text-[15.63px] leading-[30px] font-bold mb-4">{subtitle}</h2>

      {/* Description */}
      <p className="text-[14.65px] leading-[28.13px] text-gray-800 mb-6">
        {description}
      </p>

      {/* Images Section */}
      <div className="flex space-x-4 mb-6">
        {images.map((image, index) => (
          <div key={index} className="w-1/3 h-32 bg-gray-300 rounded-lg overflow-hidden">
            <img
              src={image.src}
              alt={`Tour Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Helpful/Not Helpful Section */}
      <div className="flex space-x-4 text-gray-700">
        <span className="text-[14.53px] leading-[28.13px] px-4 py-2 cursor-pointer">Helpful</span>
        <span className="text-[14.53px] leading-[28.13px] px-4 py-2 cursor-pointer">Not Helpful</span>
      </div>

      
    </div>
  );
};

export default TourReview;
