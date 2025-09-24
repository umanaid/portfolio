export const projects = [
    {
        id: 1,
        title: "BigclassesAI",
        description: "A full-stack learning platform built with Django REST and React, featuring course listings, user dashboards, and responsive design.",
        longDescription: "Designed and developed course listings, user dashboards, and payment modules using Django REST Framework and React.js. Containerized the application using Docker and automated CI/CD using GitHub Actions, enabling efficient development- to-deployment cycles. Collaborated with cross-functional teams to align frontend UI with wireframes created in Figma, ensuring seamless user experience across devices.",
        aboutProject: "This project focused on developing a full-stack course management platform with an emphasis on user experience, scalability, and streamlined deployment. The backend was built using Django REST Framework to provide APIs for course listings and user dashboards, while React.js powered the responsive and interactive frontend. The application was containerized with Docker to ensure consistency across environments, and CI/CD pipelines were automated using GitHub Actions, significantly improving the efficiency of development-to-deployment cycles. Collaboration with cross-functional teams ensured that the frontend design closely followed Figma wireframes, resulting in a seamless experience across devices.",
        technologies: ["React", "Django REST", "Docker", "GitHub Actions", "Figma", "Sqlite", "Typescript"],
        url: "https://github.com/umanaid/bigclasses_website",
        liveUrl: "https://bigclasses.ai/",
        year: "2025",
        featured: true,
        status: "live",
        screenshots: [
            "/images/ss/bigclassesai/screenshot1.png",
            "/images/ss/bigclassesai/screenshot2.png",
            "/images/ss/bigclassesai/screenshot3.png"
        ],
        keyFeatures: [
            "Responsive Frontend: Developed with React.js, closely aligned with Figma wireframes for a seamless cross-device experience.",
            "Backend with Django REST Framework: Robust API design to support smooth communication between frontend and backend.",
            "Dockerized Application: Containerization ensured consistent performance across development and production environments.",
            "Automated CI/CD Pipelines: Implemented using GitHub Actions for efficient and reliable development-to-deployment cycles.",
            "Cross-functional Collaboration: Worked with designers and developers to align UI/UX with project requirements."
        ],
        challenges: [
            "API Integration: Synchronizing Django REST Framework APIs with React frontend state management.",
            "UI Consistency: Ensuring accurate implementation of Figma wireframes while maintaining responsiveness.",
            "CI/CD Setup: Configuring and debugging GitHub Actions workflows for smooth automation.",
            "Cross-functional Collaboration: Coordinating effectively with designers and developers to align features with design specifications."
        ]
    },
    {
        id: 2,
        title: "BigEBrains",
        description: "A dynamic Django-React web platform featuring blogs, services, and contact forms with optimized performance and SEO.",
        longDescription: "Built a dynamic multi-page site using Django and React.js to showcase services, blogs, and contact forms. Configured Django Admin for content management, deployed with NGINX reverse proxy and SSL on AWS EC2, and optimized performance for faster page load and SEO. Ensured secure deployment and high availability by integrating HTTPS, caching strategies, and monitoring application logs post-deployment.",
        aboutProject: "This project focused on building a dynamic multi-page website using React.js to showcase services, blogs, and contact forms. The application was deployed on AWS EC2 with an NGINX reverse proxy, SSL integration, and HTTPS for secure communication. To enhance user experience and reach, performance was optimized with caching strategies and SEO best practices for faster page loads and improved search visibility. Post-deployment, monitoring and log analysis were set up to ensure high availability, reliability, and smooth operations.",
        technologies: ["React", "Typescript", "sqlite", "Django"],
        url: "https://github.com/umanaid/bigebrains_website",
        liveUrl: "https://bigebrains.com/",
        year: "2025",
        featured: true,
        status: "live",
        screenshots: [
            "/images/ss/bigebrains/screenshot1.png",
            "/images/ss/bigebrains/screenshot2.png",
            "/images/ss/bigebrains/screenshot3.png"
        ],
        keyFeatures: [
            "Multi-page React Application: Designed and developed to display services, blogs, and interactive contact forms.",
            "Secure Deployment: Configured NGINX reverse proxy with SSL/HTTPS for secure and reliable access.",
            "Cloud Hosting: Deployed on AWS EC2 for scalability and high availability.",
            "Performance Optimization: Implemented caching strategies and SEO improvements for faster load times and better rankings.",
            "Monitoring & Logging: Set up application logs to track performance, errors, and system health."
        ],
        challenges: [
            "Deployment Configuration: Setting up AWS EC2 with NGINX reverse proxy and SSL required in-depth troubleshooting.",
            "Performance & SEO: Balancing speed optimizations with SEO best practices.",
            "Security & Availability: Ensuring HTTPS, caching strategies, and monitoring to maintain reliability.",
            "Scalability: Designing the architecture to handle future growth and traffic surges."
        ]
    },
    {
        id: 3,
        title: "Event Planning and Management App",
        description: "A Flask-based web app that streamlines event planning through a centralized management platform.",
        longDescription: "A comprehensive event management system built with Flask that allows users to create, manage, and track events efficiently. Features include event scheduling, attendee management, budget tracking, vendor coordination, and real-time updates. The platform provides tools for event organizers to streamline their workflow and ensure successful event execution.",
        aboutProject: "This project involved developing a comprehensive event management system using Flask, designed to simplify the planning and execution of events. The platform enables users to create, manage, and track events efficiently by integrating essential features such as scheduling, attendee management, budget tracking, and vendor coordination. Real-time updates enhance communication and decision-making, helping event organizers streamline workflows and ensure smooth execution. The system provides a centralized solution that reduces the hassle of manual planning and improves overall efficiency in event management.",
        technologies: ["Html", "css", "SQL", "flask", "javascript", "bootstrap"],
        url: "https://github.com/umanaid/events",
        liveUrl: null,
        year: "2024",
        featured: false,
        status: "development",
        screenshots: [
            "/images/ss/eventapp/screenshot1.png",
            "/images/ss/eventapp/screenshot2.png",
            "/images/ss/eventapp/screenshot3.png",
            "/images/ss/eventapp/screenshot4.png"
        ],
        keyFeatures: [
            "Event Scheduling: Create and manage event timelines with ease.",
            "Attendee Management: Track registrations, attendance, and engagement.",
            "Budget Tracking: Monitor expenses and allocations to stay within budget.",
            "Vendor Coordination: Manage vendor details and communication in one place.",
            "Real-time Updates: Instant notifications for changes, reminders, and alerts.",
            "Centralized Dashboard: One-stop platform for organizers to oversee all event activities."
        ],
        challenges: [
            "Feature Integration: Ensuring smooth interaction between scheduling, attendee, and budget modules.",
            "Real-time Functionality: Implementing live updates and notifications without affecting system performance.",
            "Data Management: Handling dynamic event data while maintaining accuracy and consistency.",
            "User Experience: Designing an intuitive interface to simplify complex event workflows.",
            "Scalability: Building a system that can handle events of varying sizes and complexities."
        ]
    }
];

// You can replace these paths with your actual project screenshots
// Make sure to create the following folder structure in your public directory:
// public/
//   images/
//     ss/
//       bigclassesai/
//         screenshot1.png
//         screenshot2.png
//         screenshot3.png
//       bigebrains/
//         screenshot1.png
//         screenshot2.png
//         screenshot3.png
//       eventapp/
//         screenshot1.png
//         screenshot2.png
//         screenshot3.png