import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail'; // Add this import
import './App.css';

// Main portfolio page component
const Portfolio = () => {
  return (
    <>
      <Header />
      <main style={{ 
        backgroundColor: '#000000', 
        margin: 0, 
        padding: 0 
      }}>
        {/* Each component becomes a section with an ID */}
        <section id="home" style={{ 
          backgroundColor: '#000000', 
          margin: 0, 
          padding: 0 
        }}>
          <Home />
        </section>
        
        <section id="projects" style={{ 
          backgroundColor: '#000000', 
          margin: 0, 
          padding: '80px 0' 
        }}>
          <Projects />
        </section>
        
        {/* Use the actual Skills component instead of placeholder */}
        <section id="skills" style={{ 
          backgroundColor: '#000000', 
          margin: 0, 
          padding: 0  // Remove padding since Skills component has its own
        }}>
          <Skills />
        </section>
        
        {/* Use the actual Experience component instead of placeholder */}
        <section id="experience" style={{ 
          backgroundColor: '#000000', 
          margin: 0, 
          padding: 0  // Remove padding since Experience component should have its own
        }}>
          <Experience />
        </section>
        
        <section id="contact" style={{ 
          backgroundColor: '#000000', 
          margin: 0, 
          padding: 0 
        }}>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="app-container" style={{ 
      backgroundColor: '#000000', 
      margin: 0, 
      padding: 0,
      minHeight: '100vh'
    }}>
      <Routes>
        {/* Main portfolio page route */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Individual project detail page route */}
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;