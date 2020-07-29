import React, {useEffect} from 'react';
import myprojects from '../data/myprojects.json';
import '../App.css';
import AOS from 'aos';


const projecList = myprojects.projects;
const link = process.env.PUBLIC_URL + "/assets/images/source_code.png";

// const Projects = () => {
//     return (
//         <div className = "Section">
//             <div className = "Heading">Projects</div>
//             {
//                 projecList.map((project, i) => {
//                     return (
//                         <div key = {i}>
//                             <div className = "Project-title">{project.projectName}</div>
//                             <div>{project.technologies}</div>
//                             <div>{project.duration}</div>
//                             <ul>
//                             {project.description.map((line, j) => {
//                                 return (
//                                     // <div key = {j}>
//                                         <li key = {j}>{line}</li>
//                                     // {/* </div> */}
//                                 );
//                             })}
//                             </ul>
//                             <a href= {project.link} target = "_blank" rel="noopener noreferrer">
//                                 <img src={link} alt="Link" className = "Project-link"/>
//                             </a>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// } 


const Projects = () => {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
      });

    return (
        <div className="Section" style = {{backgroundColor: "#F1F1F1"}} id = "projects">
            <div className="Heading" data-aos="fade-in" data-aos-duration="2000">Projects</div>
            <div className="card-container" data-aos = "fade" data-aos-duration = "1000">
                {
                    projecList.map((project, i) => {
                        return (
                            <div data-aos = "slide-left" data-aos-duration = "1500" className="row" key={i}>
                                <div className="card" key={i}>
                                    <div className="card-title">{project.projectName}</div>

                                    <div className="Technology">Technologies: {project.technologies}</div>
                                    {/* <div className="Technology">Technologies: <img src = {process.env.PUBLIC_URL + "/assets/skills_logos/python.png"} alt = "Python" style = {{width: "15px"}}/></div> */}
                                    <div className="Duration">{project.duration}</div>
                                    <br />
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={link} alt="Link" className="Project-link"/>
                                    </a>
                                    <br />
                                    <div className="card-content" style = {{paddingRight: "25px"}}>
                                        <ul>
                                            {project.description.map((line, j) => {
                                                return (
                                                    <li className="Description" key={j}>{line}</li>
                                                );
                                            })}
                                        </ul>
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

export default Projects;
