import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import SkillDetail from './components/SkillDetail';     // Import this
import ProjectDetail from './components/ProjectDetail'; // Import this

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/skills/:id" element={<SkillDetail />} />    {/* Add this */}
          <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Add this */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;