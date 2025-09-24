import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Calendar, Code, Layers } from 'lucide-react';
import { projects } from './projectData';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    // Filter options based on project status
    const filterOptions = [
        { name: 'All', count: projects.length },
        { name: 'Featured', count: projects.filter(p => p.featured).length },
        { name: 'Live', count: projects.filter(p => p.liveUrl).length },
        { name: 'Development', count: projects.filter(p => p.status === 'development').length }
    ];

    // Filter projects based on active filter
    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Featured') return project.featured;
        if (activeFilter === 'Live') return project.liveUrl;
        if (activeFilter === 'Development') return project.status === 'development';
        return true;
    });

    const cssStyles = `
        .featured-projects {
            min-height: 100vh;
            background-color: #000000;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            padding: 4rem 2rem;
        }

        .featured-projects-container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .featured-projects-header {
            margin-bottom: 3rem;
        }

        .featured-projects-title {
            font-size: clamp(2.5rem, 6vw, 3.5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            color: #ffffff;
            letter-spacing: -0.02em;
        }

        .featured-projects-subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.3rem);
            color: #888888;
            max-width: 800px;
            line-height: 1.6;
            margin: 0;
        }

        .filter-tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
        }

        .filter-tab {
            padding: 12px 24px;
            border: 1px solid #333333;
            border-radius: 50px;
            background: transparent;
            color: #888888;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .filter-tab:hover {
            border-color: #555555;
            color: #ffffff;
        }

        .filter-tab.active {
            background: #ffffff;
            color: #000000;
            border-color: #ffffff;
        }

        .filter-count {
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
        }

        .filter-tab.active .filter-count {
            background: rgba(0, 0, 0, 0.2);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .project-card {
            background: #111111;
            border: 1px solid #222222;
            border-radius: 12px;
            padding: 1.25rem;
            position: relative;
            transition: all 0.3s ease;
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
        }

        .project-card:hover {
            border-color: #333333;
            transform: translateY(-2px);
        }

        .project-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .project-number {
            color: #333333;
            font-size: 12px;
            font-weight: 600;
            flex-shrink: 0;
        }

        .project-badges {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        .project-status {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            white-space: nowrap;
        }

        .status-live {
            background: #10B981;
            color: #ffffff;
        }

        .status-development {
            background: #3B82F6;
            color: #ffffff;
        }

        .status-featured {
            background: #F59E0B;
            color: #ffffff;
        }

        .project-title {
            font-size: clamp(1.2rem, 4vw, 1.4rem);
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: #ffffff;
            line-height: 1.2;
        }

        .project-meta {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            color: #666666;
            font-size: 12px;
            flex-wrap: wrap;
        }

        .project-meta-item {
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .project-description {
            color: #CCCCCC;
            line-height: 1.5;
            margin-bottom: 1.25rem;
            font-size: 13px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 1.25rem;
            max-height: 60px;
            overflow: hidden;
        }

        .tech-tag {
            padding: 4px 8px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            font-size: 10px;
            color: #ffffff;
            font-weight: 500;
            white-space: nowrap;
        }

        .project-actions {
            display: flex;
            gap: 8px;
            flex-direction: column;
        }

        .action-button {
            padding: 10px 16px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            white-space: nowrap;
            min-width: 120px;
        }

        .action-button svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            display: inline-block !important;
        }

        .primary-button {
            background: #ffffff;
            color: #000000;
            border: none;
        }

        .primary-button:hover {
            background: #f0f0f0;
            transform: translateY(-2px);
        }

        .secondary-button {
            background: transparent;
            color: #ffffff;
            border: 1px solid #333333;
        }

        .secondary-button:hover {
            border-color: #555555;
            background: rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 480px) {
            .featured-projects {
                padding: 2.5rem 1.5rem;
            }
            
            .project-card {
                padding: 1.5rem;
            }
            
            .project-actions {
                flex-direction: row;
                gap: 8px;
            }
            
            .action-button {
                flex: 1;
                font-size: 13px;
                padding: 11px 18px;
            }
            
            .action-button svg {
                width: 16px;
                height: 16px;
            }
            
            .project-description {
                font-size: 14px;
            }
            
            .tech-tag {
                font-size: 11px;
                padding: 5px 10px;
            }
        }

        @media (min-width: 768px) {
            .featured-projects {
                padding: 3rem 2rem;
            }
            
            .projects-grid {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.25rem;
            }
            
            .project-card {
                padding: 1.25rem;
                border-radius: 12px;
            }
            
            .project-header {
                margin-bottom: 0.75rem;
            }
            
            .project-number {
                font-size: 12px;
            }
            
            .project-status {
                padding: 4px 8px;
                font-size: 10px;
            }
            
            .project-title {
                font-size: clamp(1.2rem, 3vw, 1.35rem);
                margin-bottom: 0.5rem;
            }
            
            .project-meta {
                font-size: 12px;
                margin-bottom: 0.75rem;
            }
            
            .project-description {
                font-size: 13px;
                margin-bottom: 1rem;
                -webkit-line-clamp: 2;
            }
            
            .tech-stack {
                margin-bottom: 1rem;
                gap: 5px;
                max-height: 45px;
            }
            
            .tech-tag {
                font-size: 10px;
                padding: 4px 8px;
            }
            
            .project-actions {
                gap: 8px;
            }
            
            .action-button {
                font-size: 12px;
                padding: 8px 14px;
            }
            
            .action-button svg {
                width: 14px;
                height: 14px;
            }
        }

        @media (min-width: 1024px) {
            .featured-projects {
                padding: 4rem 2rem;
            }
            
            .projects-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .project-card {
                padding: 1.5rem;
                border-radius: 12px;
            }
            
            .project-card:hover {
                transform: translateY(-3px);
            }
            
            .project-header {
                margin-bottom: 1rem;
            }
            
            .project-number {
                font-size: 13px;
            }
            
            .project-status {
                padding: 4px 10px;
                font-size: 11px;
            }
            
            .project-badges {
                gap: 6px;
            }
            
            .project-title {
                font-size: 1.4rem;
                margin-bottom: 0.75rem;
            }
            
            .project-meta {
                font-size: 13px;
                gap: 0.75rem;
                margin-bottom: 1rem;
            }
            
            .project-description {
                font-size: 14px;
                margin-bottom: 1.25rem;
                -webkit-line-clamp: 3;
            }
            
            .tech-stack {
                gap: 6px;
                margin-bottom: 1.25rem;
                max-height: 50px;
            }
            
            .tech-tag {
                padding: 5px 10px;
                font-size: 11px;
                border-radius: 16px;
            }
            
            .project-actions {
                gap: 10px;
            }
            
            .action-button {
                padding: 10px 16px;
                font-size: 13px;
                gap: 6px;
                border-radius: 6px;
            }
            
            .action-button svg {
                width: 16px;
                height: 16px;
                flex-shrink: 0;
                display: inline-block !important;
            }
        }

        @media (min-width: 1440px) {
            .projects-grid {
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 1.75rem;
            }
            
            .project-card {
                padding: 1.75rem;
            }
            
            .project-title {
                font-size: 1.5rem;
            }
            
            .project-description {
                font-size: 14px;
                margin-bottom: 1.5rem;
            }
            
            .tech-stack {
                margin-bottom: 1.5rem;
            }
            
            .action-button svg {
                width: 16px;
                height: 16px;
                flex-shrink: 0;
                display: inline-block !important;
            }
        }

        @media (max-width: 768px) {
            .featured-projects {
                padding: 2rem 1rem;
            }
            
            .filter-tabs {
                gap: 0.5rem;
            }
            
            .filter-tab {
                padding: 8px 14px;
                font-size: 12px;
            }
        }
    `;

    // Inject styles
    React.useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssStyles;
        document.head.appendChild(styleElement);
        return () => document.head.removeChild(styleElement);
    }, []);

    // Updated function to return multiple badges
    const getProjectBadges = (project) => {
        const badges = [];
        
        if (project.featured) {
            badges.push({ label: 'FEATURED', class: 'status-featured' });
        }
        
        if (project.liveUrl && project.status === 'live') {
            badges.push({ label: 'LIVE', class: 'status-live' });
        } else if (project.status === 'development') {
            badges.push({ label: 'DEVELOPMENT', class: 'status-development' });
        }
        
        if (badges.length === 0) {
            badges.push({ label: 'PROJECT', class: 'status-development' });
        }
        
        return badges;
    };

    return (
        <div className="featured-projects">
            <div className="featured-projects-container">
                <div className="featured-projects-header">
                    <h1 className="featured-projects-title">Featured Projects</h1>
                    <p className="featured-projects-subtitle">
                        A curated collection of my recent work showcasing modern web development, 
                        clean design principles, and innovative solutions to real-world problems.
                    </p>
                </div>

                <div className="filter-tabs">
                    {filterOptions.map(filter => (
                        <button
                            key={filter.name}
                            className={`filter-tab ${activeFilter === filter.name ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.name)}
                        >
                            {filter.name}
                            <span className="filter-count">({filter.count})</span>
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => {
                        const badges = getProjectBadges(project);
                        return (
                            <div key={project.id} className="project-card">
                                <div className="project-header">
                                    <span className="project-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="project-badges">
                                        {badges.map((badge, idx) => (
                                            <span key={idx} className={`project-status ${badge.class}`}>
                                                {badge.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="project-title">{project.title}</h2>

                                <div className="project-meta">
                                    <div className="project-meta-item">
                                        <Calendar size={14} />
                                        {project.year || '2024'}
                                    </div>
                                    <div className="project-meta-item">
                                        <Code size={14} />
                                        {project.technologies.length} techs
                                    </div>
                                </div>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="tech-stack">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <Link 
                                        to={`/project/${project.id}`} 
                                        className="action-button primary-button"
                                    >
                                        <Layers size={16} />
                                        View Project
                                    </Link>
                                    <a 
                                        href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="action-button secondary-button"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    {project.liveUrl && (
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="action-button secondary-button"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;