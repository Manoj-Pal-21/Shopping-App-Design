import React from 'react';
import PropTypes from 'prop-types';

const RoadMapItem = ({ day, title, description }) => (
  <div className="relative pl-8 mb-8 border-l-2 border-orange-300">
    <div className="absolute -left-2.5 w-5 h-5 bg-orange-500 rounded-full"></div>
    <div className="ml-4">
      <h2 className="text-lg font-medium mb-1">{day}: {title}</h2>
      {description && <p className="text-sm text-gray-700">{description}</p>}
    </div>
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
    <div className="p-8 max-w-[42rem] ml-0"> {/* Changed mx-auto to ml-0 */}
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Itinerary</h1>

      {/* Timeline */}
      <div>
        {itinerary.map((item, index) => (
          <RoadMapItem
            key={index}
            day={item.day}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
