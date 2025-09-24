import React from 'react';
import './Footer.css';

const Footer = () => {
    const handleNavigation = (sectionId, event) => {
        event.preventDefault();
        
        // Check if we're on a project detail page
        const isProjectDetailPage = window.location.pathname.includes('/project/');
        
        if (isProjectDetailPage) {
            // On project detail page - navigate to home page with section hash
            switch(sectionId) {
                case 'home':
                    window.location.href = '/';
                    return;
                case 'skills':
                    window.location.href = '/#skills';
                    return;
                case 'projects':
                    window.location.href = '/#projects';
                    return;
                case 'experience':
                case 'contact':
                    // These sections exist on project detail page, scroll to them
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    return;
                default:
                    window.location.href = `/#${sectionId}`;
                    return;
            }
        } else {
            // On home page or other pages - scroll to section if it exists
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // If section doesn't exist, navigate to home with hash
                window.location.href = `/#${sectionId}`;
            }
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h2 className="footer-title">
                            Digital <span className="title-accent">Showcase</span>
                        </h2>
                        <p className="footer-description">Crafting digital experiences with passion</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="section-title">Quick Links</h3>
                        <div className="links-grid">
                            <a 
                                href="#home" 
                                className="footer-link"
                                onClick={(e) => handleNavigation('home', e)}
                            >
                                Home
                            </a>
                            <a 
                                href="#experience" 
                                className="footer-link"
                                onClick={(e) => handleNavigation('experience', e)}
                            >
                                Experience
                            </a>
                            <a 
                                href="#skills" 
                                className="footer-link"
                                onClick={(e) => handleNavigation('skills', e)}
                            >
                                Skills
                            </a>
                            <a 
                                href="#projects" 
                                className="footer-link"
                                onClick={(e) => handleNavigation('projects', e)}
                            >
                                Projects
                            </a>
                            <a 
                                href="#contact" 
                                className="footer-link"
                                onClick={(e) => handleNavigation('contact', e)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h3 className="section-title">Services</h3>
                        <div className="services-grid">
                            <div className="service-item">Web Development</div>
                            <div className="service-item">UI/UX Design</div>
                            <div className="service-item">Mobile Apps</div>
                            <div className="service-item">API Integration</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2024 Harsh Patel. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="/privacy" className="legal-link">Privacy Policy</a>
                        <a href="/terms" className="legal-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;