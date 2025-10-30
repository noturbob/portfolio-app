import React, { useState } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const SkillCard = ({ name, Icon, delay }) => {
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0) rotateY(0)');

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const rotateX = (y - 0.5) * 20;
        const rotateY = (x - 0.5) * 20;
        
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0) rotateY(0)');
    };

    return (
        <AnimatedWrapper delay={delay} animationType="scale-in">
            <div
                className="relative p-8 rounded-2xl text-center cursor-pointer group h-full overflow-hidden"
                style={{
                    transform,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.1s ease-out'
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-600/0 to-purple-500/0 group-hover:from-violet-500/20 group-hover:via-violet-600/10 group-hover:to-purple-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gray-900 group-hover:bg-gray-800/50 transition-all duration-500"></div>
                <div className="absolute inset-0 border border-gray-700/50 group-hover:border-violet-400/50 transition-all duration-500 rounded-2xl"></div>

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-30 blur group-hover:blur-lg rounded-2xl transition-all duration-500 -z-10"></div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                        <div className="relative inline-block">
                            <Icon className="w-12 h-12 text-violet-400 group-hover:text-violet-300 transition-all duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-violet-400/20 blur-lg group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                        </div>
                    </div>
                    
                    <p className="text-white font-bold text-lg group-hover:text-violet-300 transition-all duration-300">
                        {name}
                    </p>
                    
                    {/* Bottom accent line animation */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-violet-400/0 via-violet-400 to-violet-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/20 group-hover:via-white/5 group-hover:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
        </AnimatedWrapper>
    );
};

export default SkillCard;