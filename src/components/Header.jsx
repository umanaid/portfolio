import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation - improved for mobile
  const handleNavigation = (sectionId) => {
    console.log('Navigating to:', sectionId); // Debug log
    
    // Function to scroll to element
    const scrollToElement = (elementId, retries = 0) => {
      const element = document.getElementById(elementId);
      console.log('Looking for element:', elementId, 'Found:', !!element); // Debug log
      
      if (element) {
        // Calculate offset for mobile header
        const isMobile = window.innerWidth <= 480;
        const offset = isMobile ? 100 : 80; // Adjust based on your header height
        
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        console.log('Scrolled to:', elementId); // Debug log
      } else if (retries < 5) {
        // Retry if element not found (might still be loading)
        setTimeout(() => scrollToElement(elementId, retries + 1), 200);
      } else {
        console.log('Element not found after retries:', elementId);
      }
    };
    
    if (!isHomePage) {
      // Close mobile menu first if on mobile
      closeMenu();
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => scrollToElement(sectionId), 500);
    } else {
      // Close mobile menu first on same page navigation
      closeMenu();
      // Already on home page, scroll immediately but with delay for menu close
      setTimeout(() => scrollToElement(sectionId), 300);
    }
  };

  // Track which section is currently visible (only on home page)
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside or on route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Navigation items with their section IDs
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="header redesigned-header">
      <nav className="nav-container">
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* Close button for mobile menu */}
          <button 
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={
                  isHomePage && activeSection === item.id ? 'active' : ''
                }
                type="button"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </nav>
    </header>
  );
};

export default Header;