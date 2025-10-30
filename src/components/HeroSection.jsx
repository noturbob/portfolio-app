import React, { useState, useEffect } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import { Link } from 'react-scroll';

const glowStyle = {
    textShadow: '0 0 30px rgba(167, 139, 250, 0.8), 0 0 60px rgba(167, 139, 250, 0.4)',
};

const titleGradient = {
    background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #D946EF 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'textGradient 6s ease infinite'
};

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section 
            id="hero" 
            className="relative flex items-center justify-center min-h-screen section-padding hero-gradient-bg overflow-hidden"
            style={{ perspective: '1000px' }}
        >
            {/* Animated Background Orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

            {/* Floating Icons Background */}
            <div className="absolute top-20 left-20 animate-float opacity-20">
                <Code2 className="w-12 h-12 text-violet-400" />
            </div>
            <div className="absolute bottom-32 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
                <Zap className="w-12 h-12 text-violet-400" />
            </div>

            <div className="relative z-10 text-center max-w-5xl px-4">
                {/* Animated Badge */}
                <AnimatedWrapper delay={0}>
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 backdrop-blur-sm hover:border-violet-400/50 transition">
                        <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                        <span className="text-sm font-medium text-violet-300">Welcome to my digital space</span>
                    </div>
                </AnimatedWrapper>

                {/* Main Heading with Animated Gradient */}
                <AnimatedWrapper delay={100} animationType="scale-in">
                    <p className="text-lg sm:text-xl text-violet-300 mb-6 font-medium opacity-90 hover:opacity-100 transition" style={glowStyle}>
                        ✨ Hey, I'm Bobby Anthene
                    </p>
                    
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                        <span style={titleGradient}>
                            Crafting Digital
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
                            Experiences
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        A passionate <span className="text-violet-400 font-semibold">BBA IT student</span> transforming ideas into elegant, performant web solutions. 
                        <br className="hidden sm:inline" />
                        <span className="inline-block mt-2">150+ LeetCode problems solved • Full-Stack Enthusiast • React & Node.js Expert</span>
                    </p>
                </AnimatedWrapper>

                {/* CTA Buttons with Hover Effects */}
                <AnimatedWrapper delay={200} animationType="slide-up">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                View My Work
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl border-2 border-violet-400/50 text-violet-300 hover:border-violet-400 hover:bg-violet-400/10 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                        >
                            <span className="group-hover:text-violet-200 transition">Get In Touch</span>
                        </Link>
                    </div>
                </AnimatedWrapper>

                {/* Scroll Indicator */}
                <AnimatedWrapper delay={300} animationType="fade">
                    <div className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                        <span className="text-sm text-gray-400">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                            <div 
                                className="w-1 h-2 bg-gradient-to-b from-violet-400 to-transparent rounded-full animate-bounce"
                                style={{ animationDuration: '2s' }}
                            ></div>
                        </div>
                    </div>
                </AnimatedWrapper>
            </div>

            {/* Parallax Effect Line */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-50"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            ></div>
        </section>
    );
};

export default HeroSection;