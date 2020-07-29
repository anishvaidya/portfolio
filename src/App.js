import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Introduction from './components/Introduction';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App" data-spy="scroll" data-target=".navbar" data-offset="50">
      <Navigation />
      <Introduction />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </div>

  );
}

export default App;
