import React from 'react';
import PropTypes from 'prop-types';

const RoadMapItem = ({ day, title, description }) => (
  <div>
    <h2 className="text-lg leading-[30px] font-medium mb-2">{day}: {title}</h2>
    {description && <p className="text-sm leading-[28.13px]">{description}</p>}
  </div>
);

RoadMapItem.propTypes = {
  day: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const RoadMap = () => {
  const itinerary = [
    {
      day: 'Day 1',
      title: 'Airport Pick Up',
      description: 'Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.'
    },
    { day: 'Day 2', title: 'Temples & River Cruise' },
    { day: 'Day 3', title: 'Massage & Overnight Train' },
    { day: 'Day 4', title: 'Khao Sok National Park' },
    { day: 'Day 5', title: 'Travel to Koh Phangan' },
    { day: 'Day 6', title: 'Morning Chill & Muay Thai Lesson' },
    { day: 'Day 7', title: 'Island Boat Trip' },
  ];

  return (
    <div className="p-8 max-w-[42rem]">
      {/* Title */}
      <h1 className="text-4xl leading-[45px] font-bold mb-6">Itinerary</h1>

      {/* Roadmap items */}
      <div className="space-y-6">
        {itinerary.map((item, index) => (
          <RoadMapItem
            key={index}
            day={item.day}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="border-t border-gray-300 mt-[50px]"></div>
    </div>
  );
};

export default RoadMap;
