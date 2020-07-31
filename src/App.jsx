import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience';
import Skills from './components/Skills.jsx';
import Introduction from './components/Introduction';
import Navigation from './components/Navigation';
import About from './components/About';
import SplashScreen from './components/SplashScreen';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            renderSplashscreen: true
        };
        // setTimeout(()=>this.setState({renderSplashscreen: false}), 1000);
    }

    componentDidMount() {
        setTimeout(()=>this.setState({renderSplashscreen: false}), 1000);
    }

    render() {

        if (this.state.renderSplashscreen)
            return <SplashScreen />;
        else
            return (
                <div className="App" data-spy="scroll" data-target=".navbar" data-offset="50">
                    <Navigation />
                    <Introduction />
                    <Skills />
                    <Education />
                    <Experience />
                    <Projects />
                    <About />
                </div>
            );
    }
}

export default App;