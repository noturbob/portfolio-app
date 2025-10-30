import React, { useState } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { ChevronRight, ExternalLink, Github, Code2 } from 'lucide-react';

const ProjectBlock = ({ title, category, description, tags, imageUrl, imageAlt, isReversed, delay, projectUrl, githubUrl }) => {
    const [hoverState, setHoverState] = useState(false);

    const slideImage = isReversed ? 'slide-right' : 'slide-left';
    const slideText = isReversed ? 'slide-left' : 'slide-right';

    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center group">
            {/* Image Section */}
            <div className={`flex justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <AnimatedWrapper 
                    delay={delay} 
                    animationType={slideImage} 
                    className="w-full max-w-lg relative"
                    onMouseEnter={() => setHoverState(true)}
                    onMouseLeave={() => setHoverState(false)}
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        {/* Animated Border Gradient */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10"></div>

                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-video border border-gray-700/50 group-hover:border-violet-400/50 transition-all duration-500">
                            <img 
                                src={imageUrl} 
                                alt={imageAlt} 
                                className={`w-full h-full object-cover transition-all duration-700 ${hoverState ? 'scale-110' : 'scale-100'}`}
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = `https://placehold.co/1200x800/2D3748/F3F4F6?text=${imageAlt.replace(/ /g, '+')}`; 
                                }}
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Project Preview Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-16 h-16 rounded-full bg-violet-600/80 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                                    <ExternalLink className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-violet-400/0 group-hover:border-violet-400 transition-all duration-500"></div>
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-violet-400/0 group-hover:border-violet-400 transition-all duration-500"></div>
                        </div>
                    </div>
                </AnimatedWrapper>
            </div>
            
            {/* Content Section */}
            <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                <AnimatedWrapper delay={delay + 150} animationType={slideText}>
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Code2 className="w-4 h-4 text-violet-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-violet-400 opacity-80 group-hover:opacity-100 transition">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight group-hover:text-violet-300 transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 rounded-full border border-violet-400/30 hover:border-violet-400/60 hover:from-violet-500/40 hover:to-purple-500/40 transition-all duration-300 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Links */}
                    <AnimatedWrapper delay={delay + 300}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href={projectUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group/link inline-flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live Project
                                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                            
                            <a 
                                href={githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group/link inline-flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-lg border-2 border-violet-400/50 text-violet-300 font-semibold hover:border-violet-400 hover:bg-violet-400/10 transition-all duration-300"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </AnimatedWrapper>
                </AnimatedWrapper>
            </div>
        </div>
    );
};

export default ProjectBlock;