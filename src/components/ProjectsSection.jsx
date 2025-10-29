import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import ProjectBlock from './ProjectBlock';

const projects = [
    { 
        id: 1, 
        title: "Algo_Viz", 
        category: "Data Visualization Tool",
        description: "A dynamic web application built with React.js that visually demonstrates how various sorting algorithms work. The tool allows users to control the speed and size of the array, making complex algorithms easy to understand and learn.",
        tags: ["React.js", "JavaScript", "HTML/CSS"],
        imageUrl: "/algo-viz.png",
        imageAlt: "Sorting Algorithm Visualizer",
        isReversed: false,
        // ✅ FIRST PROJECT LINK INSERTED HERE
        projectUrl: "https://algo-viz-v1.vercel.app/" 
    },
    { 
        id: 2, 
        title: "SyncBoard", 
        category: "Collaborative Web App",
        description: "A real-time collaborative whiteboard application built using the MERN stack (MongoDB, Express, React, Node.js) and WebSockets. Users can draw, write, and interact on a shared canvas in real-time, making it an ideal tool for remote brainstorming and teamwork.",
        tags: ["MERN Stack", "WebSockets", "Real-Time"],
        imageUrl: "/syncboard-landing2.png",
        imageAlt: "Collaborative Whiteboard",
        isReversed: true,
        // 👈 INSERT SECOND PROJECT LINK HERE when ready
        projectUrl: "https://syncboard-xi.vercel.app/" 
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Featured Work</h2>
                    <p className="text-lg text-gray-400">A selection of projects that showcase my focus on performance and UI.</p>
                </AnimatedWrapper>

                <div className="space-y-16">
                    {projects.map(project => (
                        <ProjectBlock 
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            tags={project.tags}
                            imageUrl={project.imageUrl}
                            imageAlt={project.imageAlt}
                            isReversed={project.isReversed}
                            delay={0}
                            projectUrl={project.projectUrl} // Pass the link down
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;