import React, { useState } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import ProjectBlock from './ProjectBlock';
import { Code2, Rocket } from 'lucide-react';

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
        projectUrl: "https://algo-viz-v1.vercel.app/",
        githubUrl: "https://github.com/noturbob/algo_viz"
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
        projectUrl: "https://syncboard-xi.vercel.app/",
        githubUrl: "https://github.com/noturbob/syncboard"
    },
];

const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState(0);

    return (
        <section id="projects" className="relative section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <AnimatedWrapper className="text-center mb-20">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 backdrop-blur-sm">
                        <Rocket className="w-4 h-4 text-violet-400" />
                        <span className="text-sm font-medium text-violet-300">Portfolio Showcase</span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
                        <span className="text-gradient">Featured Work</span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        A carefully curated selection of projects that demonstrate my expertise in 
                        <br className="hidden sm:inline" />
                        <span className="text-violet-400 font-semibold"> performance, design, and innovation.</span>
                    </p>
                </AnimatedWrapper>

                {/* Project Tabs */}
                <AnimatedWrapper delay={100} animationType="slide-up" className="flex justify-center gap-4 mb-16">
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => setActiveProject(index)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                                activeProject === index
                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50'
                                    : 'bg-gray-800/50 text-gray-300 hover:text-white border border-gray-700/50 hover:border-violet-400/30'
                            }`}
                        >
                            <Code2 className="w-4 h-4 inline mr-2" />
                            {project.title}
                        </button>
                    ))}
                </AnimatedWrapper>

                {/* Projects Display with Animation */}
                <div className="relative">
                    <div className="space-y-28">
                        {projects.map((project, index) => (
                            <div 
                                key={project.id}
                                className={`transition-all duration-700 ${
                                    activeProject === index ? 'opacity-100 visible' : 'opacity-0 hidden'
                                }`}
                            >
                                <ProjectBlock 
                                    title={project.title}
                                    category={project.category}
                                    description={project.description}
                                    tags={project.tags}
                                    imageUrl={project.imageUrl}
                                    imageAlt={project.imageAlt}
                                    isReversed={project.isReversed}
                                    delay={0}
                                    projectUrl={project.projectUrl} 
                                    githubUrl={project.githubUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <AnimatedWrapper delay={500} animationType="slide-up" className="mt-24 pt-16 border-t border-gray-700/50 text-center">
                    <p className="text-gray-400 text-lg mb-6">Interested in more projects or collaborations?</p>
                    <a 
                        href="https://github.com/noturbob" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
                    >
                        <Code2 className="w-5 h-5" />
                        Explore My GitHub
                    </a>
                </AnimatedWrapper>
            </div>
        </section>
    );
};

export default ProjectsSection;