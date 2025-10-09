import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './projectData';
import { Github, ExternalLink, ArrowLeft, X, Eye, Calendar, Code, CheckCircle, AlertCircle, Zap } from 'lucide-react';

// Import your components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from './Experience';
import Contact from './Contact';

const ProjectDetail = () => {
    // Prevent any scroll behavior immediately
    React.useLayoutEffect(() => {
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }, 100);
        
        return () => {
            document.documentElement.style.scrollBehavior = originalScrollBehavior;
        };
    }, []);

    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));
    const [mainImage, setMainImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [imageErrors, setImageErrors] = useState(new Set());

    const cssStyles = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: auto !important;
        }

        body {
            overflow-x: hidden;
        }

        .project-detail {
            min-height: 100vh;
            background: #000000;
            color: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            position: relative;
            padding: 0 2rem;
        }

        .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(45deg, transparent 30%, rgba(0, 100, 255, 0.02) 50%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(0, 150, 255, 0.01) 50%, transparent 70%);
            background-size: 400% 400%;
            animation: gradientShift 20s ease infinite;
            pointer-events: none;
            z-index: 0;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .content {
            position: relative;
            z-index: 1;
            max-width: 1400px;
            margin: 0 auto;
        }

        .nav-section {
            padding: 2rem 0;
            border-bottom: 1px solid rgba(0, 100, 255, 0.1);
            margin-bottom: 2rem;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            background: rgba(0, 100, 255, 0.1);
            padding: 12px 24px;
            border-radius: 50px;
            border: 1px solid rgba(0, 100, 255, 0.3);
            transition: all 0.3s ease;
        }

        .back-link:hover {
            background: rgba(0, 100, 255, 0.2);
            border-color: #0064ff;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 100, 255, 0.2);
        }

        .hero-section {
            margin-bottom: 4rem;
        }

        .project-header {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .project-title {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            line-height: 0.9;
            color: #ffffff;
            letter-spacing: -0.03em;
        }

        .project-badges {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .badge {
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .badge-live {
            background: #10B981;
            color: #ffffff;
        }

        .badge-featured {
            background: rgba(0, 100, 255, 0.1);
            color: #0064ff;
            border: 1px solid rgba(0, 100, 255, 0.3);
        }

        .project-meta {
            display: flex;
            gap: 3rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .meta-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 15px;
        }

        .meta-icon {
            color: #0064ff;
        }

        .project-description {
            font-size: clamp(1.1rem, 3vw, 1.4rem);
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2.5rem;
            max-width: 800px;
        }

        .action-buttons {
            display: flex;
            gap: 2rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 36px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            border-radius: 50px;
        }

        .btn-primary {
            background: #0064ff;
            color: #ffffff;
        }

        .btn-primary:hover {
            background: #0050cc;
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 100, 255, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #ffffff;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
            border-color: #0064ff;
            color: #0064ff;
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 100, 255, 0.2);
        }

        .hero-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            margin-bottom: 3rem;
        }

        .hero-content {
            order: 1;
        }

        .hero-images {
            order: 2;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            margin-bottom: 4rem;
        }

        .left-column {
            order: 1;
        }

        .right-column {
            order: 2;
        }

        .features-challenges-section {
            margin-bottom: 4rem;
            grid-column: 1 / -1;
        }

        .features-challenges-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
        }

        .feature-card,
        .challenge-card {
            background: rgba(15, 15, 15, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.4s ease;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
            width: 100%;
            min-height: 280px;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #4285f4, #34a853);
        }

        .challenge-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #ff6b6b, #feca57);
        }

        .feature-card:hover,
        .challenge-card:hover {
            background: rgba(25, 25, 25, 0.9);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 2rem;
        }

        .card-icon {
            width: 52px;
            height: 52px;
            background: rgba(66, 133, 244, 0.15);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4285f4;
            flex-shrink: 0;
        }

        .challenge-card .card-icon {
            background: rgba(255, 107, 107, 0.15);
            color: #ff6b6b;
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }

        .gallery-section {
            margin-bottom: 2rem;
        }

        .gallery-main {
            position: relative;
            width: 100%;
            height: 350px;
            margin-bottom: 1rem;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: none;
            background: rgba(15, 15, 15, 0.5);
        }

        .gallery-main:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 100, 255, 0.3);
        }

        .gallery-main-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            background: transparent;
            transition: all 0.4s ease;
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
        }

        .gallery-main-image.loaded {
            opacity: 1;
        }

        @keyframes fadeIn {
            to { opacity: 1; }
        }

        .image-skeleton {
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                rgba(30, 30, 30, 0.5) 25%,
                rgba(50, 50, 50, 0.5) 50%,
                rgba(30, 30, 30, 0.5) 75%
            );
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 12px;
        }

        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        .gallery-main:hover .gallery-main-image {
            transform: scale(1.02);
        }

        .gallery-thumbnails {
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            padding: 0.5rem 0;
        }

        .thumbnail {
            flex: 0 0 80px;
            height: 60px;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            overflow: hidden;
            border-radius: 8px;
            background: rgba(15, 15, 15, 0.5);
            position: relative;
        }

        .thumbnail:hover,
        .thumbnail.active {
            border-color: #0064ff;
        }

        .thumbnail-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .thumbnail-image.loaded {
            opacity: 1;
        }

        .content-section {
            margin-bottom: 2.5rem;
        }

        .section-title {
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 1.5rem;
        }

        .about-content {
            font-size: 18px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
        }

        .tech-section {
            margin-bottom: 2.5rem;
        }

        .tech-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .tech-item {
            display: inline-block;
            padding: 12px 20px;
            background: rgba(0, 100, 255, 0.08);
            border: 1px solid rgba(0, 100, 255, 0.2);
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            color: #ffffff;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .tech-item:hover {
            background: rgba(0, 100, 255, 0.15);
            border-color: #0064ff;
            transform: translateY(-2px);
            color: #0064ff;
        }

        .feature-item,
        .challenge-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 0;
            color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.2s ease;
        }

        .feature-item:hover,
        .challenge-item:hover {
            color: rgba(255, 255, 255, 1);
            transform: translateX(5px);
        }

        .feature-item:last-child,
        .challenge-item:last-child {
            border-bottom: none;
        }

        .feature-icon {
            color: #4285f4;
            flex-shrink: 0;
            margin-top: 2px;
            transition: all 0.2s ease;
        }

        .challenge-icon {
            color: #ff6b6b;
            flex-shrink: 0;
            margin-top: 2px;
            transition: all 0.2s ease;
        }

        .feature-item:hover .feature-icon {
            color: #5a9df8;
        }

        .challenge-item:hover .challenge-icon {
            color: #ff8e8e;
        }

        .feature-text,
        .challenge-text {
            font-size: 14px;
            line-height: 1.5;
            font-weight: 500;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 2rem;
            animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-image {
            max-width: 90vw;
            max-height: 90vh;
            object-fit: contain;
            border: 2px solid #0064ff;
            border-radius: 8px;
        }

        .close-button {
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: rgba(0, 100, 255, 0.2);
            border: 2px solid #0064ff;
            border-radius: 50%;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .close-button:hover {
            background: #0064ff;
            transform: scale(1.1);
        }

        @media (min-width: 1200px) {
            .project-detail {
                padding: 0 3rem;
            }

            .hero-layout,
            .main-content {
                gap: 4rem;
            }

            .features-challenges-grid {
                gap: 2.5rem;
                max-width: 1100px;
            }

            .feature-card,
            .challenge-card {
                padding: 2.5rem;
                min-height: 320px;
            }

            .card-title {
                font-size: 1.4rem;
            }

            .feature-text,
            .challenge-text {
                font-size: 15px;
            }

            .gallery-main {
                height: 380px;
            }
        }

        @media (max-width: 1024px) {
            .hero-layout {
                grid-template-columns: 1fr;
                gap: 3rem;
            }

            .hero-content {
                order: 1;
            }

            .hero-images {
                order: 2;
            }

            .main-content {
                grid-template-columns: 1fr;
                gap: 3rem;
            }

            .left-column {
                order: 1;
            }

            .right-column {
                order: 2;
            }

            .features-challenges-grid {
                gap: 2.5rem;
            }

            .feature-card,
            .challenge-card {
                padding: 2.5rem;
                min-height: 350px;
            }
        }

        @media (max-width: 768px) {
            .project-detail {
                padding: 0 1rem;
            }

            .nav-section {
                padding: 1rem 0;
                margin-bottom: 1rem;
            }

            .back-link {
                font-size: 14px;
                padding: 10px 18px;
                gap: 8px;
            }

            .hero-section {
                margin-bottom: 2rem;
            }

            .project-header {
                gap: 1rem;
                margin-bottom: 1rem;
                flex-direction: column;
                align-items: flex-start;
            }

            .project-title {
                font-size: clamp(2rem, 8vw, 3rem);
                line-height: 1;
                margin-bottom: 0.5rem;
            }

            .project-badges {
                gap: 0.5rem;
            }

            .badge {
                padding: 6px 12px;
                font-size: 11px;
            }

            .project-meta {
                gap: 1.5rem;
                margin-bottom: 1rem;
                flex-wrap: wrap;
            }

            .meta-item {
                font-size: 13px;
                gap: 8px;
            }

            .project-description {
                font-size: 16px;
                line-height: 1.5;
                margin-bottom: 1.5rem;
            }

            .action-buttons {
                flex-direction: column;
                gap: 0.75rem;
                margin-bottom: 2rem;
            }

            .btn {
                padding: 12px 24px;
                font-size: 14px;
                justify-content: center;
                width: 100%;
                gap: 8px;
            }

            .main-content {
                gap: 1.5rem;
                margin-bottom: 2rem;
            }

            .section-title {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            .about-content {
                font-size: 15px;
                line-height: 1.6;
            }

            .tech-grid {
                gap: 0.5rem;
            }

            .tech-item {
                padding: 8px 12px;
                font-size: 12px;
            }

            .gallery-main {
                height: 220px;
            }

            .features-challenges-section {
                margin-bottom: 2rem;
            }

            .features-challenges-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .feature-card,
            .challenge-card {
                padding: 1.5rem;
                min-height: auto;
            }

            .card-header {
                gap: 12px;
                margin-bottom: 1.5rem;
            }

            .card-icon {
                width: 40px;
                height: 40px;
            }

            .card-title {
                font-size: 1.1rem;
            }

            .feature-text,
            .challenge-text {
                font-size: 13px;
                line-height: 1.4;
            }

            .feature-item,
            .challenge-item {
                padding: 10px 0;
                gap: 10px;
            }
        }

        .project-detail .header {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
        }

        .project-detail .nav-section {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(0, 100, 255, 0.1);
            margin-bottom: 2rem;
            margin-top: 1rem;
        }

        .project-detail #experience,
        .project-detail #contact {
            background: transparent;
            color: inherit;
        }

        .project-detail * {
            color: inherit;
        }

        @media (max-width: 480px) {
            .project-detail {
                padding: 0 0.75rem;
            }

            .nav-section {
                padding: 0.75rem 0;
            }

            .back-link {
                font-size: 13px;
                padding: 8px 16px;
            }

            .project-title {
                font-size: clamp(1.75rem, 9vw, 2.5rem);
            }

            .badge {
                padding: 5px 10px;
                font-size: 10px;
            }

            .meta-item {
                font-size: 12px;
            }

            .project-description {
                font-size: 14px;
            }

            .btn {
                padding: 10px 20px;
                font-size: 13px;
            }

            .section-title {
                font-size: 1.25rem;
            }

            .about-content {
                font-size: 14px;
            }

            .tech-item {
                padding: 6px 10px;
                font-size: 11px;
            }

            .gallery-main {
                height: 180px;
            }

            .feature-card,
            .challenge-card {
                padding: 1.25rem;
            }

            .card-icon {
                width: 36px;
                height: 36px;
            }

            .card-title {
                font-size: 1rem;
            }

            .feature-text,
            .challenge-text {
                font-size: 12px;
            }
        }
    `;

    const projectFeatures = project.keyFeatures || [
        "Interactive course dashboard",
        "Secure payment processing", 
        "Mobile-first responsive design",
        "Real-time progress tracking"
    ];

    const projectChallenges = project.challenges || [
        "Implementing real-time course progress tracking",
        "Optimizing payment gateway integration",
        "Creating responsive design for multiple device types"
    ];

    const aboutProject = project.aboutProject || project.longDescription || project.description;

    // Image loading handler
    const handleImageLoad = (src) => {
        setLoadedImages(prev => new Set([...prev, src]));
    };

    const handleImageError = (src) => {
        setImageErrors(prev => new Set([...prev, src]));
        console.error(`Failed to load image: ${src}`);
    };

    // Preload first image
    useEffect(() => {
        if (project?.screenshots?.length > 0) {
            const firstImage = project.screenshots[0];
            setMainImage(firstImage);
            
            // Preload the first image
            const img = new Image();
            img.onload = () => handleImageLoad(firstImage);
            img.onerror = () => handleImageError(firstImage);
            img.src = firstImage;

            // Lazy load other images after a delay
            const timer = setTimeout(() => {
                project.screenshots.slice(1).forEach((src, index) => {
                    setTimeout(() => {
                        const img = new Image();
                        img.onload = () => handleImageLoad(src);
                        img.onerror = () => handleImageError(src);
                        img.src = src;
                    }, index * 200); // Stagger loading by 200ms
                });
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [project]);

    // Inject styles
    useEffect(() => {        
        const styleElement = document.createElement('style');
        styleElement.textContent = cssStyles;
        document.head.appendChild(styleElement);
        
        return () => document.head.removeChild(styleElement);
    }, []);

    if (!project) {
        return (
            <div className="project-detail">
                <div className="animated-bg"></div>
                <div className="content">
                    <div className="nav-section">
                        <Link to="/" className="back-link">
                            <ArrowLeft size={18} /> Back to Projects
                        </Link>
                    </div>
                    <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1rem' }}>
                            Project Not Found
                        </h2>
                        <p>The project you're looking for doesn't exist.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail">
            <div className="animated-bg"></div>
            
            <Header />
            
            <div className="content">
                <nav className="nav-section">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={18} /> Back to Projects
                    </Link>
                </nav>

                <section className="hero-section">
                    <div className="hero-layout">
                        <div className="hero-content">
                            <div className="project-header">
                                <h1 className="project-title">{project.title}</h1>
                                <div className="project-badges">
                                    {project.liveUrl && <span className="badge badge-live">LIVE</span>}
                                    {project.featured && <span className="badge badge-featured">FEATURED</span>}
                                </div>
                            </div>

                            <div className="project-meta">
                                <div className="meta-item">
                                    <Calendar size={18} className="meta-icon" />
                                    {project.year || '2025'}
                                </div>
                                <div className="meta-item">
                                    <Code size={18} className="meta-icon" />
                                    {project.technologies.length} Technologies
                                </div>
                                {project.liveUrl && (
                                    <div className="meta-item">
                                        <Eye size={18} className="meta-icon" />
                                        Live Demo Available
                                    </div>
                                )}
                            </div>
                            
                            <p className="project-description">
                                {project.longDescription || project.description}
                            </p>

                            <div className="action-buttons">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <Github size={20} />
                                    View Code
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        <ExternalLink size={20} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="hero-images">
                            {project.screenshots && project.screenshots.length > 0 && (
                                <section className="gallery-section">
                                    <div 
                                        className="gallery-main"
                                        onClick={() => setSelectedImage(mainImage)}
                                    >
                                        {!loadedImages.has(mainImage) && !imageErrors.has(mainImage) && (
                                            <div className="image-skeleton" />
                                        )}
                                        <img 
                                            src={mainImage || project.screenshots[0]} 
                                            alt={`${project.title} main screenshot`}
                                            className={`gallery-main-image ${loadedImages.has(mainImage) ? 'loaded' : ''}`}
                                            loading="eager"
                                            onLoad={() => handleImageLoad(mainImage)}
                                            onError={() => handleImageError(mainImage)}
                                            style={{ display: imageErrors.has(mainImage) ? 'none' : 'block' }}
                                        />
                                    </div>
                                    
                                    {project.screenshots.length > 1 && (
                                        <div className="gallery-thumbnails">
                                            {project.screenshots.map((src, index) => (
                                                <div 
                                                    key={index} 
                                                    className={`thumbnail ${src === mainImage ? 'active' : ''}`}
                                                    onClick={() => setMainImage(src)}
                                                >
                                                    {!loadedImages.has(src) && !imageErrors.has(src) && (
                                                        <div className="image-skeleton" />
                                                    )}
                                                    <img 
                                                        src={src} 
                                                        alt={`Thumbnail ${index + 1}`}
                                                        className={`thumbnail-image ${loadedImages.has(src) ? 'loaded' : ''}`}
                                                        loading="lazy"
                                                        onLoad={() => handleImageLoad(src)}
                                                        onError={() => handleImageError(src)}
                                                        style={{ display: imageErrors.has(src) ? 'none' : 'block' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            )}
                        </div>
                    </div>
                </section>

                <div className="main-content">
                    <div className="left-column">
                        <section className="content-section">
                            <h2 className="section-title">About This Project</h2>
                            <p className="about-content">
                                {aboutProject}
                            </p>
                        </section>
                    </div>

                    <div className="right-column">
                        <section className="tech-section">
                            <h2 className="section-title">Technologies Used</h2>
                            <div className="tech-grid">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-item">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <div className="features-challenges-section">
                    <div className="features-challenges-grid">
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <CheckCircle size={22} />
                                </div>
                                <h3 className="card-title">Key Features</h3>
                            </div>
                            <div className="card-content">
                                {projectFeatures.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <CheckCircle size={16} className="feature-icon" />
                                        <span className="feature-text">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="challenge-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <Zap size={22} />
                                </div>
                                <h3 className="card-title">Challenges & Solutions</h3>
                            </div>
                            <div className="card-content">
                                {projectChallenges.map((challenge, index) => (
                                    <div key={index} className="challenge-item">
                                        <Zap size={16} className="challenge-icon" />
                                        <span className="challenge-text">{challenge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="experience">
                    <Experience />
                </div>
                <div id="contact">
                    <Contact />
                </div>

            </div>

            <Footer />

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <button 
                        className="close-button"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={24} />
                    </button>
                    <img 
                        src={selectedImage} 
                        alt="Enlarged view"
                        className="modal-image"
                        onClick={e => e.stopPropagation()}
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;