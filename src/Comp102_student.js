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
        <div>
            
            <HeaderContent data={headerData} />
            
            <h2>Calendar</h2>

            
            <CalendarTable weeks={weeks} />
        </div>
    );
};

export default Comp102;

