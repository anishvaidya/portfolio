import React from 'react';
import myeducation from '../data/myeducation.json';
import '../App.css';

// import Card from '@material-ui/core/Card';

// import CardContent from '@material-ui/core/CardContent';


const educationList = myeducation.education;

// const Education = () => {
//     return (
//         <div className = "Section">
//             <div className = "Heading">Education</div>
//             {
//             educationList.map((education, i) => {
//                 let logo = process.env.PUBLIC_URL + education.logo;
//                 return (
//                 <div key = {i}>
//                     {/* <img src = {education.logo} alt = "logo"/> */}
//                     <img src= {logo} alt="logo" className = "Logo no-select"/>
//                     {/* <img src = {require(logo)} alt = "logo"/> */}
//                     <div className = "University">{education.universityName}</div>
//                     <div>{education.collegeName}</div>
//                     <div>{education.degree}</div>
//                     <div>{education.duration}</div>
//                     <div>{education.location}</div>
//                     <div>Courses: {education.courses}</div>
//                     <div>Grade: {education.Grade}</div>
//                 </div>
//                 );
//             })
//             }
//         </div>
//     );
// }

const Education = () => {
    return (
        <div className="Section">
            <div className="Heading">Education</div>
            <div className="card-container">
                {
                    educationList.map((education, i) => {
                        let logo = process.env.PUBLIC_URL + education.logo;
                        return (
                            <div className="row" key = {i}>
                                <div className="card" key={i}>
                                    <div className="card-content">
                                        <div className="card-title">{education.universityName}</div>
                                        <img src={logo} alt="logo" className="Logo no-select" />
                                    </div>
                                    <br />
                                    <div className="college">{education.collegeName}</div>
                                    <div style = {{fontWeight: "bold"}}>{education.degree}</div>
                                    <div className="Duration">{education.duration}</div>
                                    <div>{education.location}</div>
                                    <br/>
                                    <div className="card-content">
                                        <div>Courses: {education.courses}</div>
                                        <br/>
                                        <div style = {{fontWeight: "bold"}}>Grade: {education.Grade}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Education;


