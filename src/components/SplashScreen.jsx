import React, { Component } from 'react';
import '../App.css';


const logo = process.env.PUBLIC_URL + '/assets/images/splash_logo.svg';
// Component for Splash Screen
class SplashScreen extends Component {
    render() {
        const imageStyle = {
            width: '20vh',
            height: '100%',
        };

        const backgroundStyle = {
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#343a40',
        };

        return (
            <div style={backgroundStyle}><img src={logo} style={imageStyle} alt="My logo" /></div>

        );
    }
}

export default SplashScreen;