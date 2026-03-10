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
    },
    {
    id: 4,
    title: "Skillkoders",
    description: "A responsive React-based educational platform that manages user interactions and data using Google integrations.",
    longDescription: "Developed a modern educational platform using React.js to showcase courses, services, and learning resources. Implemented Google integrations for handling data storage and form submissions, simplifying backend requirements while ensuring reliable data collection. Designed reusable React components and optimized UI performance to provide a smooth user experience across devices. The platform focuses on clean UI design, fast loading, and efficient data handling using cloud-based services.",
    aboutProject: "Skillkoders is a web platform designed to present educational content, services, and user interaction features in a clean and responsive interface. The frontend was developed using React.js with a modular component architecture for scalability and maintainability. Instead of a traditional backend database, Google integrations were used for storing and managing form data, enabling simple and efficient data collection. The project emphasizes performance optimization, responsive design, and a user-friendly experience across desktop and mobile devices.",
    technologies: ["React", "JavaScript", "Google Integration", "HTML", "CSS"],
    liveUrl: "https://www.skillkoder.com/",
    year: "2025",
    featured: true,
    status: "live",
    screenshots: [
        "/images/ss/skillkoders/screenshot1.png",
        "/images/ss/skillkoders/screenshot2.png",
        "/images/ss/skillkoders/screenshot3.png"
    ],
    keyFeatures: [
        "Responsive React Application: Built a modern and responsive UI using reusable React components.",
        "Google Data Integration: Utilized Google services to store and manage user-submitted data from forms.",
        "User-Friendly Interface: Designed an intuitive interface for easy navigation and accessibility.",
        "Component-Based Architecture: Structured the project using modular components for scalability and maintainability.",
        "Performance Optimization: Ensured smooth loading and efficient rendering for better user experience."
    ],
    challenges: [
        "Google Integration Setup: Configuring Google services for seamless data storage and retrieval.",
        "State Management: Handling form data and component interactions efficiently in React.",
        "Responsive Design: Ensuring consistent layout and usability across multiple devices and screen sizes.",
        "Performance Optimization: Reducing unnecessary re-renders and improving UI responsiveness."
    ]
},
{
    id: 5,
    title: "LyntraData",
    description: "A full-stack web platform built with React and Django REST Framework that manages services, dynamic course listings, and landing pages with backend-driven content.",

    longDescription: "Developed a full-stack web application using React.js for the frontend and Django with Django REST Framework for the backend. The platform dynamically displays services, course listings, and course landing pages managed through backend APIs. Implemented REST APIs to enable seamless communication between React and Django, ensuring efficient data handling and dynamic content updates. Integrated Google Sheets for storing and managing certain form data, allowing quick data collection and easy administrative access. Focused on performance optimization, responsive design, and scalable backend architecture.",

    aboutProject: "LyntraData is a dynamic platform designed to showcase services and educational courses. The frontend was developed using React.js with reusable components to ensure a modern and responsive user interface. The backend was built using Django and Django REST Framework to manage application logic, handle APIs, and dynamically deliver course data. Course listings and landing pages are generated using backend-managed content, making the platform easy to update and scale. Additionally, Google Sheets integration was implemented for collecting and managing user form submissions efficiently.",

    technologies: [
        "React",
        "Django",
        "Django REST Framework",
        "Python",
        "Google Sheets Integration",
        "HTML",
        "CSS",
        "JavaScript"
    ],

    liveUrl: "https://lyntra.in/",
    year: "2025",
    featured: true,
    status: "live",

    screenshots: [
        "/images/ss/lyntradata/screenshot1.png",
        "/images/ss/lyntradata/screenshot2.png",
        "/images/ss/lyntradata/screenshot3.png"
    ],

    keyFeatures: [
        "Full Stack Architecture: Built using React frontend and Django backend with REST APIs.",
        "Dynamic Course Listings: Courses and landing pages are generated dynamically from backend data.",
        "REST API Integration: Django REST Framework APIs connect the frontend with backend services.",
        "Google Sheets Integration: Form submissions and certain data are stored using Google Sheets for easy management.",
        "Responsive Design: Optimized UI for smooth experience across desktop and mobile devices."
    ],

    challenges: [
        "Frontend–Backend Integration: Ensuring smooth communication between React and Django REST APIs.",
        "Dynamic Course Rendering: Implementing backend-driven course listings and landing pages.",
        "API Structure Design: Creating scalable APIs using Django REST Framework.",
        "External Integration: Managing secure data transfer between the application and Google Sheets."
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