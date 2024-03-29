import React, { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import Typed from 'react-typed';
import Partices from './Particles';

// import Particles from 'react-particles-js';

const picture = process.env.PUBLIC_URL + "/assets/images/anish_dp.jpg";
const Introduction = () => {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
    });

    return (

        <div className="Section" id="introduction" style={{ backgroundColor: "#F1F1F1" }}>
            <Partices />
            <div data-aos="fade-in" data-aos-duration="2000" className="IntroContent">
                <br /><br /><br /><br />
                <img src={picture} alt="Meri tasveer" className="no-select" style={{ width: "20vw", borderRadius: "50%" }} data-aos="zoom-out-down" data-aos-duration="1500" />
                <br /><br />
                <div className="Name no-select">Anish Vaidya</div>

                <Typed className="typed no-select"
                    strings={[
                        "a coder", "a learner", "an ML enthusiast", "a gymnast"]}
                    typeSpeed={30}
                    backSpeed={50}
                    loop >
                </Typed>
                <div>
                    <a href="https://github.com/anishvaidya" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" style={{ fontSize: "2em", color: "black", padding: "1vw" }}></i></a>
                    <a href="https://www.linkedin.com/in/anish-amul-vaidya/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ fontSize: "2em", color: "black", padding: "1vw" }}></i></a>
                    <a href="https://www.instagram.com/anish_vaidya/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" style={{ fontSize: "2em", color: "black", padding: "1vw" }}></i></a>
                </div>
            </div>
        </div>
    );
}

export default Introduction;