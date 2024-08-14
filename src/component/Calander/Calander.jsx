import React, { useState } from 'react';

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const defaultStartDate = 5; 
  const defaultEndDate = 15;  
  
  const [selectedStartDate, setSelectedStartDate] = useState(defaultStartDate);
  const [selectedEndDate, setSelectedEndDate] = useState(defaultEndDate);
 
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  
  const handleStartDateClick = (date) => {
    if (selectedEndDate && date > selectedEndDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else {
      setSelectedStartDate(date);
    }
  };

  
  const handleEndDateClick = (date) => {
    if (selectedStartDate && date < selectedStartDate) {
      setSelectedEndDate(null);
    } else {
      setSelectedEndDate(date);
    }
  };

  const renderCalendar = (title, selectedDate, onDateClick) => (
    <div className="bg-white shadow-md rounded-lg p-2 w-full sm:w-64">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Header with Days of the Week */}
      <div className="grid grid-cols-7 gap-0.5 text-center font-semibold text-gray-700 mb-1">
        {daysOfWeek.map(day => (
          <div key={day} className="p-1 border-b">{day}</div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-0.5">
        {/* Render empty cells for days before the first day of the month */}
        {Array.from({ length: startingDay }, (_, i) => (
          <div key={`empty-${i}`} className="p-1 border rounded-lg"></div>
        ))}
        {dates.map(date => (
          <div
            key={date}
            onClick={() => onDateClick(date)}
            className={`p-1 text-center border rounded-lg cursor-pointer ${
              date === selectedDate ? 'bg-orange-500 text-white' :
              (selectedStartDate && selectedEndDate && date >= selectedStartDate && date <= selectedEndDate) ? 'bg-blue-100' :
              'hover:bg-gray-100'
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 max-w-full sm:max-w-[40rem]">
      {/* Title */}
      <h1 className="text-3xl leading-[40px] font-bold mb-4 text-left">Availability Calendar</h1>

      {/* Double Calendar Container */}
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <div className="flex-none mb-4 sm:mb-0">
          {renderCalendar('Start Date', selectedStartDate, handleStartDateClick)}
        </div>
        <div className="flex-none">
          {renderCalendar('End Date', selectedEndDate, handleEndDateClick)}
        </div>
      </div>
      <div className="border-t border-gray-300 mt-[50px]"></div>  
    </div>
  );
};

export default Calendar;
