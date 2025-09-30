import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { ChevronRight } from 'lucide-react';

// 1. ACCEPT THE NEW PROP: projectUrl
const ProjectBlock = ({ title, category, description, tags, imageUrl, imageAlt, isReversed, delay, projectUrl }) => {
    const slideImage = isReversed ? 'slide-right' : 'slide-left';
    const slideText = isReversed ? 'slide-left' : 'slide-right';

    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`flex justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <AnimatedWrapper delay={delay} animationType={slideImage} className="w-full max-w-lg">
                    <img 
                        src={imageUrl} 
                        alt={imageAlt} 
                        className="w-full h-auto rounded-xl shadow-2xl border border-gray-700 transition duration-500 hover:scale-[1.01]"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/1200x800/2D3748/F3F4F6?text=${imageAlt.replace(/ /g, '+')}`; }}
                    />
                </AnimatedWrapper>
            </div>
            
            <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                <AnimatedWrapper delay={delay + 150} animationType={slideText}>
                    <span className="text-sm font-semibold text-violet-400 mb-2 block">{category}</span>
                    <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-gray-400 mb-6 text-lg">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-800 text-violet-300 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <AnimatedWrapper delay={delay + 300}>
                      {/* 2. USE THE NEW PROP in href */}
                      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 font-semibold flex items-center transition duration-300">
                          View Live Project
                          <ChevronRight className="w-5 h-5 ml-1" />
                      </a>
                    </AnimatedWrapper>
                </AnimatedWrapper>
            </div>
        </div>
    );
};

export default ProjectBlock;