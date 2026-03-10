import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  
  const experiences = [
    {
      id: 1,
      title: "Python Fullstack Developer",
      company: "Spypro Security Solutions Pvt.Ltd.",
      duration: "Oct 2025 - Present",
      
      location: "Hyderabad, India",
      type: "Full-time",
      achievements: [
        "Engineer scalable web applications using Django/FastAPI and React.js with secure RESTful API integrations.",
        "Build and maintain backend services and APIs to support dynamic web application features and data workflows.",
        "Leverage AI/ML techniques for intelligent application features and data analysis workflows.",
        "Conduct training sessions on AI, Machine Learning, Data Science, and Power BI with hands-on projects."
      ]
    },
    {
      id: 2,
      title: "Python Fullstack Developer Intern",
      company: "BigEBrains Pvt. Ltd.",
      duration: "Apr 2025 - Oct 2025",
      location: "Hyderabad, India",
      type: "Internship",
      achievements: [
        "Developed and maintained full-stack applications using Python (Django/FastAPI) and JavaScript (React.js), improving application responsiveness and scalability.",
        "Implemented RESTful APIs and integrated backend systems, enabling seamless communication between client and server components.",
        "Actively contributed to Agile-based product development, conducted peer code reviews, and mentored junior developers on best practices and coding standards.",
        "Worked closely with design teams using Figma wireframes to implement clean, user-friendly UI experiences."
      ]
    },
    {
      id: 3,
      title: "Python Full Stack Intern",
      company: "Codegnan IT Solutions Pvt. Ltd.",
      duration: "Feb 2024 - Jun 2024",
      location: "Vijayawada, India",
      type: "Internship",
      achievements: [
        "Developed a centralized web platform using Flask to streamline event planning and coordination.",
        "Simplified the user experience by eliminating the need to browse multiple websites or make numerous calls.",
        "Designed intuitive user workflows, enabling efficient event creation, tracking, and vendor management.",
        "Focused on clean architecture and optimized backend logic for faster request handling and data flow."
      ]
    }
  ];

  useEffect(() => {
    const timers = experiences.map((_, index) => 
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, 300 + index * 200)
    );
    
    return () => timers.forEach(clearTimeout);
  }, [experiences.length]);

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '24px',
    transition: 'all 0.3s ease',
    opacity: 0,
    transform: 'translateY(20px)'
  };

  const visibleCardStyle = {
    ...cardStyle,
    opacity: 1,
    transform: 'translateY(0)'
  };

  const hoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: '#3b82f6',
    transform: 'translateY(-4px)'
  };

  return (
    <div style={{ backgroundColor: '#000000', padding: '60px 20px', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800', 
            color: 'white', 
            marginBottom: '16px',
            margin: 0 
          }}>
            Professional Journey
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'rgba(255,255,255,0.7)', 
            fontWeight: '300',
            margin: 0 
          }}>
            EXPERIENCE & ACHIEVEMENTS
          </p>
        </div>

        {/* Experience Grid */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '24px' 
        }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={visibleItems.includes(index) ? visibleCardStyle : cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, hoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, visibleCardStyle);
              }}
            >
              {/* Job Type Badge */}
              <div style={{
                display: 'inline-block',
                padding: '6px 12px',
                backgroundColor: index === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${index === 0 ? '#3b82f6' : 'white'}`,
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                {exp.type}
              </div>

              {/* Job Title */}
              <h2 style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                fontWeight: '700', 
                color: 'white', 
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>
                {exp.title}
              </h2>

              {/* Company */}
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: '500', 
                marginBottom: '12px',
                margin: '0 0 12px 0'
              }}>
                {exp.company}
              </h3>

              {/* Duration & Location */}
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontSize: '0.9rem',
                marginBottom: '24px' 
              }}>
                <div style={{ marginBottom: '4px' }}>{exp.duration}</div>
                <div>{exp.location}</div>
              </div>

              {/* Achievements */}
              <div>
                <h4 style={{ 
                  color: 'white', 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '16px',
                  margin: '0 0 16px 0'
                }}>
                  Key Achievements
                </h4>
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '12px' 
                  }}>
                    <div style={{
                      minWidth: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: index === 0 ? '#3b82f6' : 'white',
                      color: index === 0 ? 'white' : 'black',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginRight: '12px',
                      marginTop: '2px'
                    }}>
                      {achievementIndex + 1}
                    </div>
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      lineHeight: '1.5', 
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;