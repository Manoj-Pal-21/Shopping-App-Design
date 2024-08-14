import React from 'react';

const Calendar = () => {
  // Sample days and dates for the calendar
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  // Sample selected dates
  const startDate = 5; // Example start date
  const endDate = 20;  // Example end date

  const renderCalendar = (title, selectedDate) => (
    <div className="bg-white shadow-md rounded-lg p-2 w-64">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      
      {/* Header with Days of the Week */}
      <div className="grid grid-cols-7 gap-0.5 text-center font-semibold text-gray-700 mb-1">
        {daysOfWeek.map(day => (
          <div key={day} className="p-1 border-b">{day}</div>
        ))}
      </div>
      
      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-0.5">
        {dates.map(date => (
          <div
            key={date}
            className={`p-1 text-center border rounded-lg ${
              date === selectedDate ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-[40rem]">
      {/* Title */}
      <h1 className="text-3xl leading-[40px] font-bold mb-4">Availability Calendar</h1>
      
      {/* Double Calendar Container */}
      <div className="flex space-x-2">
        <div className="flex-none">
          {renderCalendar('Start Date', startDate)}
        </div>
        <div className="flex-none">
          {renderCalendar('End Date', endDate)}
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6"></div>
    </div>
  );
}

export default Calendar;
