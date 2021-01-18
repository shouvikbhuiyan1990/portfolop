import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Hero from './components/heroComponent';
import About from './components/about';
import Skills from './components/skills';
import Career from './components/career';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
import "animate.css/animate.min.css";

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
