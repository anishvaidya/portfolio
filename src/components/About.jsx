import React, { Component } from 'react';
import mystory from '../data/mystory.json';
import AOS from 'aos';

const story = mystory.story;
const quote = mystory.quote;

class About extends Component {
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }


    render() {
        return (
            <div className="Section" id="about">
                <div className="Heading" data-aos="fade-in" data-aos-duration="2000">About</div>
                <article className="About" data-aos="slide-up" data-aos-duration="2000">{story}</article>
                <div style={{ fontSize: 'calc(8px + 2vmin)', fontWeight: "bold" }} data-aos="slide-up" data-aos-duration="2000">{quote}</div>
            </div>
        );
    }
}

export default About;