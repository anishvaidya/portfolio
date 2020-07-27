import React from 'react';
import myeducation from '../data/myeducation.json';
import '../App.css';

const educationList = myeducation.education;

const Education = () => {
    return (
        <div className = "Education">
            <div className = "Heading">Education</div>
            {
            educationList.map((education, i) => {
                let logo = process.env.PUBLIC_URL + education.logo;
                return (
                <div key = {i}>
                    {/* <img src = {education.logo} alt = "logo"/> */}
                    <img src= {logo} alt="logo"/>
                    {/* <img src = {require(logo)} alt = "logo"/> */}
                    <div className = "University">{education.universityName}</div>
                    <div>{education.collegeName}</div>
                    <div>{education.degree}</div>
                    <div>{education.duration}</div>
                    <div>{education.location}</div>
                    <div>Courses: {education.courses}</div>
                    <div>Grade: {education.Grade}</div>
                </div>
                );
            })
            }
        </div>
    );

}

export default Education;


