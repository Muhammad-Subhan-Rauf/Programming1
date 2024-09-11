import React, { useEffect, useState } from 'react';

const HeaderContent = ({ data }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        
        if (!data) {
            fetch('./headerContent.json')
                .then(response => response.json())
                .then(data => setContent(data))
                .catch(error => console.error('Error fetching data:', error));
        } else {
            setContent(data);
        }
    }, [data]);

    if (!content) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
            <hr />
            <p>{content.semester}</p>

            <h2>Announcements</h2>
            <ul>
                {content.announcements.map((announcement, index) => (
                    <li key={index}>{announcement}</li>
                ))}
            </ul>

            <h2>Current Assignments</h2>
            <div className="curr_assignments">
                {content.assignments.map((assignment, index) => (
                    <a key={index} className="btn" href={assignment.link}>
                        {assignment.title} <div className="due_hw">{assignment.dueDate}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HeaderContent;
