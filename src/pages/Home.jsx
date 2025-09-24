import React, { useState, useEffect, useRef } from 'react';
import { Download, MapPin, Github, Linkedin, UserCheck, ExternalLink, ArrowRight, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(true);
  const containerRef = useRef(null);
  
  const fullText = "Hi, I'm Uma";
  const roles = ['Full-Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Innovator'];

  // Professional typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  // Fixed role rotation with proper fade transition
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setIsRoleVisible(false); // Start fade out
      
      setTimeout(() => {
        setCurrentRole(prev => (prev + 1) % roles.length);
        setIsRoleVisible(true); // Start fade in
      }, 300); // Half of the transition duration
    }, 3000);
    
    return () => clearInterval(roleInterval);
  }, []);

  // ADD THIS: Handle navigation from project detail page
  useEffect(() => {
    // Check if there's a section to scroll to after navigation
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    
    if (scrollToSection) {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');
      
      // Wait for the page to fully load and render before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // If using different IDs, try alternative IDs
          const alternativeIds = {
            'skills': 'skills-section',
            'projects': 'projects-section',
            'contact': 'contact-section',
            'experience': 'experience-section'
          };
          
          const alternativeElement = document.getElementById(alternativeIds[scrollToSection]);
          if (alternativeElement) {
            alternativeElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 300); // Increased delay to ensure all components are rendered
      
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array means this runs once when component mounts

  // Button click handlers
  const handleExploreProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If projects section doesn't exist, scroll to a reasonable position
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = '/assets/umadevi_resume.pdf'; // Update this path
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'umadevi_resume.pdf'; // The filename for download
    link.target = '_blank'; // Open in new tab first
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If contact section doesn't exist, scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern technologies and best practices.',
      color: '#3B82F6'
    },
    {
      title: 'API Development',
      description: 'Creating robust and scalable RESTful APIs with Django and FastAPI.',
      color: '#8B5CF6'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing query performance.',
      color: '#10B981'
    }
  ];

  // ... rest of your styles object remains the same
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    backgroundOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.2,
      zIndex: 0
    },
    geometricGrid: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px'
    },
    animatedLine1: {
      position: 'absolute',
      top: '80px',
      left: 0,
      width: '100%',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #3B82F6, transparent)',
      opacity: 0.3,
      animation: 'pulse 3s infinite'
    },
    animatedLine2: {
      position: 'absolute',
      bottom: '160px',
      right: 0,
      width: '100%',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #60A5FA, transparent)',
      opacity: 0.2,
      animation: 'pulse 3s infinite',
      animationDelay: '2s'
    },
    cornerAccent1: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '384px',
      height: '384px',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      borderRadius: '50%',
      transform: 'translate(192px, -192px)'
    },
    cornerAccent2: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '320px',
      height: '320px',
      border: '1px solid rgba(96, 165, 250, 0.1)',
      borderRadius: '50%',
      transform: 'translate(-160px, 160px)'
    },
    mainLayout: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '20px'
    },
    pageHeader: {
      textAlign: 'left',
      marginBottom: '48px',
      marginLeft: '32px'
    },
    pageTitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      fontWeight: 400,
      fontFamily: "'Dancing Script', 'Pacifico', cursive",
      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '0.05em',
      textTransform: 'none',
      marginBottom: '8px',
      opacity: 0.9
    },
    pageSubtitle: {
      fontSize: '16px',
      color: '#9CA3AF',
      fontWeight: 400,
      letterSpacing: '0.5px'
    },
    contentSection: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      gap: '40px',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%'
    },
    mainContent: {
      width: '100%'
    },
    statusBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '8px',
      padding: '12px 24px',
      marginBottom: '48px',
      backdropFilter: 'blur(8px)',
      cursor: 'pointer',
      transition: 'all 0.5s ease'
    },
    statusDot: {
      position: 'relative',
      width: '8px',
      height: '8px',
      backgroundColor: '#60A5FA',
      borderRadius: '50%'
    },
    statusPing: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '8px',
      height: '8px',
      backgroundColor: '#60A5FA',
      borderRadius: '50%',
      animation: 'ping 2s infinite'
    },
    statusText: {
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0.5px',
      color: '#DBEAFE'
    },
    statusArrow: {
      color: '#60A5FA',
      transition: 'transform 0.3s ease'
    },
    heroSection: {
      marginBottom: '32px'
    },
    mainTitle: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 900,
      lineHeight: '0.9',
      marginBottom: '24px',
      background: 'linear-gradient(to right, #ffffff, #DBEAFE, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    typingCursor: {
      display: 'inline-block',
      width: '4px',
      height: '1.2em',
      backgroundColor: '#60A5FA',
      marginLeft: '12px',
      animation: 'blink 1s infinite'
    },
    roleContainer: {
      height: '64px',
      overflow: 'hidden',
      marginBottom: '32px',
      position: 'relative'
    },
    role: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      fontWeight: 300,
      color: '#DBEAFE',
      letterSpacing: '1px',
      opacity: isRoleVisible ? 1 : 0,
      transition: 'opacity 0.6s ease-in-out',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    },
    description: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: '#D1D5DB',
      lineHeight: '1.6',
      fontWeight: 300,
      marginBottom: '32px'
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#9CA3AF',
      fontSize: '16px',
      fontWeight: 500,
      marginBottom: '48px'
    },
    locationIcon: {
      color: '#60A5FA'
    },
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '48px'
    },
    btnPrimary: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#2563EB',
      color: '#ffffff',
      padding: '14px 28px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '15px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      textDecoration: 'none'
    },
    btnSecondary: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: 'transparent',
      color: '#60A5FA',
      padding: '14px 28px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '15px',
      border: '2px solid #2563EB',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    btnWhite: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '14px 28px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '15px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'scale(1)',
      textDecoration: 'none'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
      marginTop: '32px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '56px',
      height: '56px',
      border: '2px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '12px',
      color: '#9CA3AF',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    sidePanel: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    serviceCard: {
      padding: '32px',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      borderRadius: '16px',
      borderLeft: '4px solid',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    serviceTitle: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#ffffff',
      marginBottom: '16px',
      letterSpacing: '-0.025em'
    },
    serviceDescription: {
      fontSize: '15px',
      color: '#9CA3AF',
      lineHeight: '1.6',
      fontWeight: 400
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#60A5FA',
      opacity: 0.6,
      zIndex: 10
    },
    scrollText: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '2px',
      fontWeight: 500
    },
    scrollIcon: {
      animation: 'bounce 2s infinite'
    }
  };

  // Event handlers remain the same...
  const handleStatusHover = (isEnter) => {
    const element = document.querySelector('.status-badge');
    if (element) {
      if (isEnter) {
        element.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
        element.style.transform = 'translateY(-2px)';
      } else {
        element.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        element.style.transform = 'translateY(0)';
      }
    }
  };

  const handleButtonHover = (e, isEnter, type) => {
    if (type === 'primary') {
      if (isEnter) {
        e.target.style.backgroundColor = '#1D4ED8';
        e.target.style.transform = 'translateY(-2px)';
      } else {
        e.target.style.backgroundColor = '#2563EB';
        e.target.style.transform = 'translateY(0)';
      }
    } else if (type === 'secondary') {
      if (isEnter) {
        e.target.style.backgroundColor = '#2563EB';
        e.target.style.color = '#ffffff';
      } else {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#60A5FA';
      }
    } else if (type === 'white') {
      if (isEnter) {
        e.target.style.backgroundColor = '#F3F4F6';
        e.target.style.transform = 'scale(1.05)';
      } else {
        e.target.style.backgroundColor = '#ffffff';
        e.target.style.transform = 'scale(1)';
      }
    }
  };

  const handleSocialHover = (e, isEnter) => {
    if (isEnter) {
      e.target.style.borderColor = '#60A5FA';
      e.target.style.color = '#60A5FA';
      e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
    } else {
      e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
      e.target.style.color = '#9CA3AF';
      e.target.style.backgroundColor = 'transparent';
    }
  };

  const handleServiceHover = (e, isEnter, color) => {
    if (isEnter) {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = color;
      e.currentTarget.style.transform = 'translateY(-4px)';
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  // Rest of your JSX remains exactly the same...
  return (
    <div style={styles.container}>
      {/* Background Elements */}
      <div style={styles.backgroundOverlay}>
        <div style={styles.geometricGrid} />
        <div style={styles.animatedLine1} />
        <div style={styles.animatedLine2} />
        <div style={styles.cornerAccent1} />
        <div style={styles.cornerAccent2} />
      </div>

      <div style={styles.mainLayout}>
        {/* Page Header */}
        <div style={styles.pageHeader} className="page-header">
          <h1 style={styles.pageTitle}>Digital Showcase</h1>
        </div>

        <div style={styles.contentSection} className="content-section">
          {/* Main Content */}
          <div style={styles.mainContent} className="main-content">
            {/* Status Badge */}
            <div 
              className="status-badge"
              style={styles.statusBadge}
              onMouseEnter={() => handleStatusHover(true)}
              onMouseLeave={() => handleStatusHover(false)}
            >
              <div style={styles.statusDot}>
                <div style={styles.statusPing} />
              </div>
              <span style={styles.statusText}>Available for Full-time Opportunities</span>
              <ArrowRight size={16} style={styles.statusArrow} />
            </div>

            {/* Hero Section */}
            <div style={styles.heroSection} className="hero-section">
              <h1 style={styles.mainTitle}>
                {displayedText}
                {displayedText.length < fullText.length && (
                  <span style={styles.typingCursor} />
                )}
              </h1>
              
              <div style={styles.roleContainer} className="role-container">
                <h2 style={styles.role}>
                  {roles[currentRole]}
                </h2>
              </div>
            </div>

            <p style={styles.description} className="description">
              Experienced software engineer specializing in scalable web applications and modern development practices. 
              Focused on delivering high-quality solutions that drive business growth and user satisfaction.
            </p>

            <div style={styles.location} className="location">
              <MapPin size={20} style={styles.locationIcon} />
              <span>Hyderabad, Telangana, India</span>
            </div>

            {/* Buttons */}
            <div style={styles.buttonGroup} className="button-group">
              <button 
                style={styles.btnPrimary}
                onMouseEnter={(e) => handleButtonHover(e, true, 'primary')}
                onMouseLeave={(e) => handleButtonHover(e, false, 'primary')}
                onClick={handleExploreProjects}
              >
                <ExternalLink size={18} />
                <span>Explore projects</span>
              </button>

              <button 
                style={styles.btnSecondary}
                onMouseEnter={(e) => handleButtonHover(e, true, 'secondary')}
                onMouseLeave={(e) => handleButtonHover(e, false, 'secondary')}
                onClick={handleDownloadResume}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>

              <button 
                style={styles.btnWhite}
                onMouseEnter={(e) => handleButtonHover(e, true, 'white')}
                onMouseLeave={(e) => handleButtonHover(e, false, 'white')}
                onClick={handleGetInTouch}
              >
                <UserCheck size={18} />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Links */}
            <div style={styles.socialLinks} className="social-links">
              {[
                { icon: Github, href: 'https://github.com/umanaid', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/uma-naidu09/', label: 'LinkedIn' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=umanaidu1109@gmail.com&su=Hello%20Uma&body=Hi%20Uma,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards', label: 'Email', target: '_blank' }

              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  style={styles.socialLink}
                  className="social-link"
                  onMouseEnter={(e) => handleSocialHover(e, true)}
                  onMouseLeave={(e) => handleSocialHover(e, false)}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Side Panel */}
          <div style={styles.sidePanel} className="side-panel">
            {services.map((service, index) => (
              <div
                key={index}
                style={{...styles.serviceCard, borderLeftColor: service.color}}
                className="service-card"
                onMouseEnter={(e) => handleServiceHover(e, true, service.color)}
                onMouseLeave={(e) => handleServiceHover(e, false, service.color)}
              >
                <h3 style={styles.serviceTitle} className="service-title">{service.title}</h3>
                <p style={styles.serviceDescription} className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={styles.scrollIndicator} className="scroll-indicator">
          <span style={styles.scrollText}>Scroll to explore</span>
          <ChevronDown size={20} style={styles.scrollIcon} />
        </div>
      </div>

      {/* CSS Animations and Mobile Responsive */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Mobile First Responsive Design */
        
        /* All screen sizes - cards below content */
        .content-section {
          flex-direction: column !important;
          gap: 40px !important;
        }
        
        .main-content {
          order: 1 !important;
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
        }
        
        .side-panel {
          order: 2 !important;
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          gap: 20px !important;
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .content-section {
            gap: 50px !important;
          }
          
          .side-panel {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 24px !important;
          }
        }
        
        /* Tablet and below */
        @media (max-width: 1023px) {
          .side-panel {
            gap: 16px !important;
          }
        }
        
        /* Mobile landscape and below */
        @media (max-width: 768px) {
          .main-layout {
            padding: 16px !important;
            min-height: 100vh !important;
          }
          
          .page-header {
            margin-left: 16px !important;
          }
          
          .content-section {
            gap: 24px !important;
          }
          
          .service-card {
            padding: 20px !important;
            margin: 0 !important;
          }
          
          .service-title {
            font-size: 18px !important;
          }
          
          .service-description {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          
          .button-group {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: stretch !important;
          }
          
          .button-group button {
            width: 100% !important;
            justify-content: center !important;
            padding: 16px 24px !important;
            font-size: 14px !important;
          }
          
          .social-links {
            justify-content: flex-start !important;
            gap: 12px !important;
          }
          
          .social-link {
            width: 48px !important;
            height: 48px !important;
          }
          
          .status-badge {
            padding: 12px 20px !important;
            margin-bottom: 32px !important;
          }
          
          .status-text {
            font-size: 13px !important;
          }
          
          .hero-section {
            margin-bottom: 24px !important;
          }
          
          .role-container {
            height: 48px !important;
            margin-bottom: 24px !important;
          }
          
          .description {
            margin-bottom: 24px !important;
          }
          
          .location {
            margin-bottom: 32px !important;
            font-size: 14px !important;
          }
          
          .scroll-indicator {
            display: none !important;
          }
        }
        
        /* Mobile portrait */
        @media (max-width: 480px) {
          .main-layout {
            padding: 12px !important;
          }
          
          .page-header {
            margin-left: 8px !important;
          }
          
          .content-section {
            gap: 20px !important;
          }
          
          .status-badge {
            padding: 10px 16px !important;
            margin-bottom: 24px !important;
          }
          
          .status-text {
            font-size: 12px !important;
            text-align: center !important;
          }
          
          .service-card {
            padding: 16px !important;
            border-radius: 12px !important;
          }
          
          .service-title {
            font-size: 16px !important;
            margin-bottom: 12px !important;
          }
          
          .service-description {
            font-size: 13px !important;
          }
          
          .button-group {
            gap: 10px !important;
          }
          
          .button-group button {
            padding: 14px 20px !important;
            font-size: 13px !important;
          }
          
          .social-links {
            gap: 10px !important;
          }
          
          .social-link {
            width: 44px !important;
            height: 44px !important;
          }
          
          .hero-section {
            margin-bottom: 20px !important;
          }
          
          .role-container {
            height: 40px !important;
            margin-bottom: 20px !important;
          }
          
          .description {
            margin-bottom: 20px !important;
          }
          
          .location {
            margin-bottom: 24px !important;
          }
        }
        
        /* Very small screens */
        @media (max-width: 375px) {
          .main-layout {
            padding: 8px !important;
          }
          
          .status-badge {
            font-size: 11px !important;
            padding: 8px 12px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          
          .service-card {
            padding: 14px !important;
          }
          
          .service-title {
            font-size: 15px !important;
          }
          
          .service-description {
            font-size: 12px !important;
          }
          
          .button-group button {
            padding: 12px 16px !important;
            font-size: 12px !important;
          }
        }
          `}</style>
    </div>
  );
};

export default Home;