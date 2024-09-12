import React from 'react';

const Row = ({ date, lecture, textbook, labLinks, homework }) => {
    return (
        <>
            <td>{date}</td>
            <td>
                {lecture.title}
                <br />
                {lecture.links.map((link, index) => (
                    <a key={index} className="btn" href={link.href}>
                        {link.label}
                    </a>
                ))}
            </td>
            <td>
                {textbook.map((chapter, index) => (
                    <a key={index} className="btn" href={chapter.href}>
                        {chapter.label}
                    </a>
                ))}
            </td>
            <td>
                {labLinks.map((link, index) => (
                    <a key={index} className="btn" href={link.href}>
                        {link.label}
                    </a>
                ))}
            </td>
            <td>
                {homework && (
                    <>
                        <a className="btn" href={homework.href}>
                            {homework.label}
                        </a>
                        <br />
                        <span className="due-date">{homework.dueDate}</span>
                        <br />
                        {homework.solutionLabel && (
                            <a className="btn" href={homework.solutionHref}>
                                {homework.solutionLabel}
                            </a>
                        )}
                    </>
                )}
            </td>
        </>
    );
};


export default Row;