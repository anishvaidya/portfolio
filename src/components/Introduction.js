import React, { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import Typed from 'react-typed';

// import Particles from 'react-particles-js';

const picture = process.env.PUBLIC_URL + "/assets/images/anish.jpg";
const Introduction = () => {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
    });

    return (
        
        <div className="Section" id="introduction" style = {{backgroundColor: "#F1F1F1"}}>
            <div data-aos="fade-in" data-aos-duration="2000" className = "IntroContent">
            {/* <Typed
                strings={['Hello, I\'m Anish Vaidya']}
                typeSpeed={40}
            /> */}
            <br/><br/><br/><br/>
            <img src= {picture} alt="Meri tasveer" className = "no-select" style = {{width: "20vw", borderRadius: "50%"}} data-aos="zoom-out-down" data-aos-duration="1500"/>
            <br/><br/>
            {/* <div style={{width: "100vw", display: "table inline-block"}}>
                <div style={{maxWidth: "70vw", textAlign: "center", display: "table-row"}}>
                    <div data-aos="slide-right" data-aos-duration="1500" style={{fontSize: "250%", display: "table-cell"}}>Hello,</div>
                    <div data-aos="slide-down" data-aos-duration="1500" style={{fontSize: "250%", display: "table-cell"}}>I am Anish Vaidya</div>
                </div>
            </div> */}

            <div className = "Name no-select">Anish Vaidya</div>

            <Typed className="typed no-select"
                strings={[
                    "a coder", "a learner", "an ML enthusiast", "a gymnast"]}
                typeSpeed={30}
                backSpeed={50}
                loop >
            </Typed>
            <div>
                <a href="https://github.com/anishvaidya"><i className="fab fa-github" style= {{fontSize: "2em", color: "black", padding: "1vw"}}></i></a>
                <a href="https://www.linkedin.com/in/anish-amul-vaidya/"><i className="fab fa-linkedin" style= {{fontSize: "2em", color: "black", padding: "1vw"}}></i></a>
                <a href="https://www.instagram.com/anish_vaidya/"><i className="fab fa-instagram" style= {{fontSize: "2em", color: "black", padding: "1vw"}}></i></a>
            </div>
            </div>
            {/* <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#000000"
                                    },
                        "number": {
                            "value": 25
                        },
                        "size": {
                            "value": 2
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                        width: '100%',
                        background: `#ffffff` 
                 }}
                /> */}
        </div>
    );
}

export default Introduction;