import React from 'react';
import Hero from './components/heroComponent';
import About from './components/about';
import Skills from './components/skills';
import Career from './components/career';
import Contact from './components/contact';
import './App.css';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Career />
      <Contact />
    </div>
  );
}

export default App;
