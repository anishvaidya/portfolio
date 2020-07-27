import React from 'react';
import myprojects from '../data/myprojects.json';
import '../App.css';

const projecList = myprojects.projects;
const link = process.env.PUBLIC_URL + "/assets/images/source_code.png";

const Projects = () => {
    return (
        <div className = "Section">
            <div className = "Heading">Projects</div>
            {
                projecList.map((project, i) => {
                    return (
                        <div key = {i}>
                            <div className = "Project-title">{project.projectName}</div>
                            <div>{project.technologies}</div>
                            <div>{project.duration}</div>
                            <ul>
                            {project.description.map((line, j) => {
                                return (
                                    // <div key = {j}>
                                        <li key = {j}>{line}</li>
                                    // {/* </div> */}
                                );
                            })}
                            </ul>
                            <a href= {project.link} target = "_blank" rel="noopener noreferrer">
                                <img src={link} alt="Link" className = "Project-link"/>
                            </a>
                        </div>
                    );
                })
            }
        </div>
    );
} 

export default Projects;
