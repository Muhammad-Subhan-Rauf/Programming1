import React, { useState, useEffect } from 'react';
import CalendarTable from './calender';
import HeaderContent from './headerContent';
import weeksData from './calendarData.json';
import headerData from './headerContent.json';


import './style.css'; // Assuming the styles are in this file
const Comp102 = () => {
  const [weeks, setWeeks] = useState([]);

  // Load data from the JSON file (weeksData)
  useEffect(() => {
    setWeeks(weeksData);
  }, []);

  return (
    <div className="flex bg-gray-200 items-start justify-center h-screen w-full">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full border border-blue-500 mt-10 md:mt-20">
        <h1 className="text-2xl md:text-2xl font-bold text-center text-blue-500 mb-4">
          Comp 102 Calendar
        </h1>
      </div>
      
      <HeaderContent data={headerData} />

      <h2>Calendar</h2>


      <CalendarTable weeks={weeks} />

    </div>
  );
};

export default Comp102;
