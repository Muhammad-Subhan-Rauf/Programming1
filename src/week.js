import React from 'react';
import Row from './row'; // Import the Row component

const Week = ({ weekNumber, rows }) => {

    // rows.map((week) => {
    //     console.log(week)
    //     let row = Row(week["date"], week["lecture"],week["textbook"],week["labLinks"],week["homework"]);
    //     console.log(row);
    //     return true;
    // })
    return (
        <>
            {rows.map((row, index) => (
                <tr key={index}>
                    {index === 0 && (
                        <td rowSpan={rows.length} className="first_col">
                            {weekNumber}
                        </td>
                    )}
                    <Row {...row} />
                </tr>
            ))}
        </>
    );
};

export default Week;
