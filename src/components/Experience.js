import React from 'react';
import myexperience from '../data/myexperience.json';
import '../App.css';

const experienceList = myexperience.experience;

const Experience = () => {
    return (
        <div className = "Section">
            <div className = "Heading">Experience</div>
            {
                experienceList.map((experience, i) => {
                    let logo = process.env.PUBLIC_URL + experience.logo;
                    return (
                        <div key = {i}>
                            <img src= {logo} alt="Logo" className = "Logo no-select"/>
                            <div>{experience.position}</div>
                            <div>{experience.institution}</div>
                            <div>{experience.location}</div>
                            <div>{experience.duration}</div>
                            <div>{experience.project}</div>
                            <ul>
                            {experience.description.map((line, j) => {
                                return (
                                    <li key = {j}>{line}</li>
                                );
                            })}
                            </ul>
                        </div>
                    );
                })
            } 
        </div>
    );
}

export default Experience;