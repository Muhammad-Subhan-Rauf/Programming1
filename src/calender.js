import Week from "./week";
import React from "react";

const CalendarTable = ({ weeks }) => {
    
    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>Week</th>
                        <th>Date</th>
                        <th>Lecture</th>
                        <th>Textbook</th>
                        <th>Lab & Discussion Links</th>
                        <th>Homework & Project</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {weeks.map((week, index) => (
                        
                        <Week key={index} {...week} />
                        
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalendarTable;