import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo no-select" alt="logo" />
      </header>
      <Education />
      <Experience />
      <Projects />
    </div>
    
  );
}

export default App;
