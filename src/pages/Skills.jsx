import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const skillsData = [
    {
      name: 'Python',
      category: 'Programming Languages',
      level: 90,
      icon: '🐍',
      description: 'Backend development, data analysis, automation'
    },
    {
      name: 'JavaScript',
      category: 'Programming Languages',
      level: 85,
      icon: '📜',
      description: 'Modern ES6+, async programming, DOM manipulation'
    },
    {
      name: 'HTML',
      category: 'Web Technologies',
      level: 92,
      icon: '🌐',
      description: 'Semantic markup, accessibility, modern standards'
    },
    {
      name: 'CSS',
      category: 'Web Technologies',
      level: 88,
      icon: '🎨',
      description: 'Responsive design, animations, Grid & Flexbox'
    },
    {
      name: 'Tailwind CSS',
      category: 'Web Technologies',
      level: 85,
      icon: '🌊',
      description: 'Utility-first CSS framework, rapid prototyping'
    },
    {
      name: 'Bootstrap',
      category: 'Web Technologies',
      level: 82,
      icon: '📦',
      description: 'Component library, responsive grid system'
    },
    {
      name: 'REST APIs',
      category: 'Web Technologies',
      level: 88,
      icon: '🔌',
      description: 'RESTful services, HTTP methods, API design'
    },
    {
      name: 'Vite',
      category: 'Web Technologies',
      level: 80,
      icon: '⚡',
      description: 'Fast build tool, hot module replacement'
    },
    {
      name: 'JSON',
      category: 'Web Technologies',
      level: 90,
      icon: '📋',
      description: 'Data interchange, API communication'
    },
    {
      name: 'React.js',
      category: 'Frontend Frameworks',
      level: 88,
      icon: '⚛️',
      description: 'Component-based UI, hooks, state management'
    },
    {
      name: 'Django',
      category: 'Backend Frameworks',
      level: 85,
      icon: '🎸',
      description: 'Full-stack web development, ORM, authentication'
    },
    {
      name: 'Django REST Framework',
      category: 'API Development',
      level: 82,
      icon: '🔗',
      description: 'RESTful APIs, serialization, authentication'
    },
    {
      name: 'FastAPI',
      category: 'Backend Frameworks',
      level: 80,
      icon: '⚡',
      description: 'Modern async APIs, automatic documentation'
    },
    {
      name: 'Flask',
      category: 'Backend Frameworks',
      level: 78,
      icon: '🌶️',
      description: 'Lightweight web applications, microservices'
    },
    {
      name: 'Postman',
      category: 'API Development',
      level: 85,
      icon: '📮',
      description: 'API testing, documentation, automation'
    },
    {
      name: 'SQL',
      category: 'Databases',
      level: 85,
      icon: '🗃️',
      description: 'Complex queries, optimization, data modeling'
    },
    {
      name: 'PostgreSQL',
      category: 'Databases',
      level: 83,
      icon: '🐘',
      description: 'Advanced features, performance tuning, JSONB'
    },
    {
      name: 'SQL Server',
      category: 'Databases',
      level: 80,
      icon: '🏢',
      description: 'Microsoft database, T-SQL, stored procedures'
    },
    {
      name: 'MySQL',
      category: 'Databases',
      level: 82,
      icon: '🐬',
      description: 'Popular open-source relational database'
    },
    {
      name: 'Git',
      category: 'Version Control',
      level: 87,
      icon: '📝',
      description: 'Branching strategies, collaboration, conflict resolution'
    },
    {
      name: 'GitHub',
      category: 'Version Control',
      level: 85,
      icon: '🐙',
      description: 'CI/CD, Actions, project management, collaboration'
    },
    {
      name: 'Docker',
      category: 'DevOps & Tools',
      level: 78,
      icon: '🐳',
      description: 'Containerization, deployment, microservices'
    },
    {
      name: 'Azure',
      category: 'Cloud Platforms',
      level: 75,
      icon: '☁️',
      description: 'Cloud deployment, services, infrastructure management'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skillsData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => new Set([...prev, index]));
        }, index * 80);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleCategoryExpansion = (category) => {
    setExpandedCategories(prev => {
        const newSet = new Set(prev);
        if (newSet.has(category)) {
            newSet.delete(category);
        } else {
            newSet.add(category);
        }
        return newSet;
    });
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    // Try multiple possible contact section identifiers
    const contactSelectors = [
      '#contact',           // Most common
      '[id*="contact"]',    // Any element with "contact" in ID
      '.contact-section',   // Class-based selector
      '[data-section="contact"]', // Data attribute
      'section:last-of-type' // Fallback to last section
    ];

    let contactElement = null;
    
    // Try each selector until we find the contact section
    for (const selector of contactSelectors) {
      contactElement = document.querySelector(selector);
      if (contactElement) break;
    }

    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll to bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const categories = [...new Set(skillsData.map(skill => skill.category))];

  const styles = {
    section: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: '20px 20px 80px 20px',
      color: '#ffffff',
      position: 'relative'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'left',
      marginBottom: '60px'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '25px',
      padding: '12px 24px',
      marginBottom: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    pulsingDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      animation: 'pulse-blue 2s infinite'
    },
    badgeText: {
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '500',
      letterSpacing: '1px'
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '24px',
      lineHeight: '1.1',
      background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.8)',
      maxWidth: '600px',
      margin: '0',
      lineHeight: '1.6'
    },
    categorySection: {
      marginBottom: '60px',
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    categoryIndicator: {
      width: '6px',
      height: '6px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      boxShadow: '0 0 20px #3b82f6'
    },
    categoryTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#ffffff',
      margin: 0
    },
    categoryCount: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '4px 12px',
      borderRadius: '12px',
      marginLeft: 'auto'
    },
    skillsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '24px'
    },
    skillItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    skillItemHidden: {
      transform: 'translateY(20px)',
      opacity: 0
    },
    skillHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    skillIcon: {
      fontSize: '28px',
      transition: 'transform 0.3s ease'
    },
    skillInfo: {
      flex: 1
    },
    skillName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#ffffff',
      margin: '0 0 4px 0'
    },
    skillDescription: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
      margin: 0,
      lineHeight: '1.4'
    },
    skillLevel: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#3b82f6',
      minWidth: '50px',
      textAlign: 'right'
    },
    progressWrapper: {
      marginTop: '20px'
    },
    progressTrack: {
      width: '100%',
      height: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden',
      position: 'relative'
    },
    progressBar: {
      height: '100%',
      background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
      borderRadius: '4px',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    },
    progressGlow: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '20px',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3))',
      borderRadius: '4px',
      animation: 'glow-sweep 2s ease-in-out infinite'
    },
    viewMoreButton: {
      marginTop: '32px',
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    cta: {
      textAlign: 'center',
      marginTop: '80px'
    },
    ctaCard: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '24px 32px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    ctaIcon: {
      fontSize: '24px',
      transition: 'transform 0.3s ease'
    },
    ctaText: {
      textAlign: 'left'
    },
    ctaTitle: {
      color: '#ffffff',
      fontWeight: '600',
      fontSize: '18px',
      margin: '0 0 4px 0'
    },
    ctaSubtitle: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '14px',
      margin: 0
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse-blue {
            0%, 100% { opacity: 1; box-shadow: 0 0 10px #3b82f6; }
            50% { opacity: 0.7; box-shadow: 0 0 20px #3b82f6; }
          }

          @keyframes glow-sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes float-icon {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(5deg); }
          }

          .skill-item:hover {
            transform: translateY(-8px) !important;
            background-color: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(59, 130, 246, 0.3) !important;
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1) !important;
          }

          .skill-item:hover .skill-icon {
            transform: scale(1.1) !important;
            animation: float-icon 2s ease-in-out infinite;
          }

          .skill-item:hover .progress-bar {
            background: linear-gradient(90deg, #3b82f6, #1d4ed8, #60a5fa) !important;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5) !important;
          }

          .category-header:hover {
            transform: translateX(8px) !important;
          }

          .category-header:hover .category-indicator {
            box-shadow: 0 0 30px #3b82f6 !important;
          }

          .view-more-button:hover {
            background-color: rgba(59, 130, 246, 0.1) !important;
            border-color: rgba(59, 130, 246, 0.5) !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2) !important;
          }

          .cta-card:hover {
            transform: translateY(-5px) !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
            border-color: rgba(59, 130, 246, 0.3) !important;
            box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15) !important;
          }

          .cta-card:hover .cta-icon {
            transform: scale(1.2) rotate(15deg) !important;
          }

          @media (max-width: 768px) {
            .skills-list {
              grid-template-columns: 1fr !important;
            }
            .title {
              font-size: 36px !important;
            }
            .category-title {
              font-size: 20px !important;
            }
          }

          .skill-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #3b82f6, transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .skill-item:hover::before {
            opacity: 1;
          }
        `}
      </style>
      
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.badge}>
              <div style={styles.pulsingDot}></div>
              <span style={styles.badgeText}>TECHNICAL EXPERTISE</span>
            </div>
            <h1 style={styles.title} className="title">
              Skills & Technologies
            </h1>
            <p style={styles.subtitle}>
              A comprehensive toolkit spanning full-stack development, from modern frontend frameworks 
              to robust backend solutions and cloud infrastructure.
            </p>
          </div>

          {categories.map((category) => {
            const skillsInCategory = skillsData.filter(skill => skill.category === category);
            const isExpanded = expandedCategories.has(category);
            const displayedSkills = skillsInCategory.length > 4 && !isExpanded
                ? skillsInCategory.slice(0, 4)
                : skillsInCategory;

            return (
              <div key={category} style={styles.categorySection}>
                <div 
                  style={styles.categoryHeader} 
                  className="category-header"
                  onClick={() => toggleCategoryExpansion(category)}
                >
                  <div style={styles.categoryIndicator} className="category-indicator"></div>
                  <h3 style={styles.categoryTitle} className="category-title">
                    {category}
                  </h3>
                  <span style={styles.categoryCount}>
                    {skillsInCategory.length} skill{skillsInCategory.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div style={styles.skillsList} className="skills-list">
                  {displayedSkills.map((skill) => {
                      const globalIndex = skillsData.indexOf(skill);
                      const isVisible = visibleSkills.has(globalIndex);
                      
                      return (
                        <div
                          key={skill.name}
                          className="skill-item"
                          style={{
                            ...styles.skillItem,
                            ...(isVisible ? {} : styles.skillItemHidden),
                            transitionDelay: `${(globalIndex % 8) * 100}ms`
                          }}
                        >
                          <div style={styles.skillHeader}>
                            <div style={styles.skillIcon} className="skill-icon">{skill.icon}</div>
                            <div style={styles.skillInfo}>
                              <h4 style={styles.skillName}>{skill.name}</h4>
                              <p style={styles.skillDescription}>{skill.description}</p>
                            </div>
                            <div style={styles.skillLevel}>{skill.level}%</div>
                          </div>
                          <div style={styles.progressWrapper}>
                            <div style={styles.progressTrack}>
                              <div 
                                style={{
                                  ...styles.progressBar,
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  transitionDelay: `${(globalIndex % 8) * 100 + 300}ms`
                                }}
                                className="progress-bar"
                              >
                                <div style={styles.progressGlow}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                
                {skillsInCategory.length > 4 && (
                    <button 
                        onClick={() => toggleCategoryExpansion(category)} 
                        style={styles.viewMoreButton}
                        className="view-more-button"
                    >
                        {isExpanded ? `Show Less` : `Show ${skillsInCategory.length - 4} More`}
                    </button>
                )}
              </div>
            );
          })}

          <div style={styles.cta}>
            <div 
              style={styles.ctaCard} 
              className="cta-card"
              onClick={scrollToContact}
            >
              <div style={styles.ctaIcon} className="cta-icon">🚀</div>
              <div style={styles.ctaText}>
                <h3 style={styles.ctaTitle}>Ready to collaborate?</h3>
                <p style={styles.ctaSubtitle}>Let's build something amazing together</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;