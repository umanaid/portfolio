import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Eye } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const styles = {
        card: {
            backgroundColor: '#111111',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid #333333',
            transition: 'all 0.3s ease',
            height: 'fit-content',
            cursor: 'default' // Remove pointer cursor since we're not making the whole card clickable
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '0.75rem',
            color: '#ffffff'
        },
        description: {
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '1rem',
            fontSize: '0.9rem'
        },
        techStack: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.5rem'
        },
        techItem: {
            padding: '4px 8px',
            fontSize: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            color: '#ffffff'
        },
        buttonGroup: {
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap'
        },
        button: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        },
        viewProjectButton: {
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none'
        },
        codeButton: {
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid #444444'
        },
        demoButton: {
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid #444444'
        }
    };

    return (
        <div 
            style={styles.card}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#555555';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#333333';
            }}
        >
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            
            <div style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                    <span key={index} style={styles.techItem}>
                        {tech}
                    </span>
                ))}
            </div>

            <div style={styles.buttonGroup}>
                <Link 
                    to={`/project/${project.id}`} 
                    style={{...styles.button, ...styles.viewProjectButton}}
                    onMouseEnter={e => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseLeave={e => e.target.style.backgroundColor = '#ffffff'}
                >
                    <Eye size={16} />
                    View Project
                </Link>
                
                <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{...styles.button, ...styles.codeButton}}
                    onMouseEnter={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
                >
                    <Github size={16} />
                    Code
                </a>
                
                {project.liveUrl && (
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{...styles.button, ...styles.demoButton}}
                        onMouseEnter={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;