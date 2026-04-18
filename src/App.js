import React from 'react';
import Navbar from './compnents/navbar/navbar';
import Intro from './compnents/intro/intro';
import Skills from './compnents/Skills/skills';
import Experience from './compnents/Experience/Experience';
import Works from './compnents/Works/works';
import Services from './compnents/Services/Services';
import Contact from './compnents/Contact/Contact';
import Footer from './compnents/Footer/footers';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Experience />
            <Works />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
