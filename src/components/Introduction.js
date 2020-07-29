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
        
        <div className="Section no-select" id="introduction">
            <div data-aos="fade-in" data-aos-duration="2000" className="Heading"></div>
            {/* <Typed
                strings={['Hello, I\'m Anish Vaidya']}
                typeSpeed={40}
            /> */}
            <br/><br/><br/><br/>
            <img src= {picture} alt="Meri tasveer" style = {{width: "300px", borderRadius: "50%"}} data-aos="zoom-out-down" data-aos-duration="1500"/>
            <br/><br/>
            <div style={{width: "100vw", display: "table inline-block"}}>
                <div style={{maxWidth: "70vw", textAlign: "center", display: "table-row"}}>
                    <div data-aos="slide-right" data-aos-duration="1500" style={{fontSize: "250%", display: "table-cell"}}>Hello,</div>
                    <div data-aos="slide-down" data-aos-duration="1500" style={{fontSize: "250%", display: "table-cell"}}>I am Anish Vaidya</div>
                </div>
            </div>
            <Typed className="typed"
                strings={[
                    "a coder", "a learner", "an ML enthusiast", "a gymnast"]}
                typeSpeed={30}
                backSpeed={50}
                loop >
            </Typed>
            {/* <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
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
                        background: `#000000` 
                 }}
                /> */}
        </div>
    );
}

export default Introduction;