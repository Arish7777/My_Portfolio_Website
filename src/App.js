import React, { Suspense } from 'react';
import Navbar from './compnents/navbar/navbar';
import Intro from './compnents/intro/intro';

const Skills = React.lazy(() => import('./compnents/Skills/skills'));
const Experience = React.lazy(() => import('./compnents/Experience/Experience'));
const Works = React.lazy(() => import('./compnents/Works/works'));
const Services = React.lazy(() => import('./compnents/Services/Services'));
const Contact = React.lazy(() => import('./compnents/Contact/Contact'));
const Footer = React.lazy(() => import('./compnents/Footer/footers'));

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#060b18', color: '#4deeea', fontFamily: '"Syne", sans-serif' }}>Loading section...</div>}>
                <Skills />
                <Experience />
                <Works />
                <Services />
                <Contact />
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
