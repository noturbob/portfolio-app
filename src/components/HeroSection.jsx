import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const glowStyle = {
    textShadow: '0 0 5px rgba(167, 139, 250, 0.6)',
};

const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="flex items-center justify-center min-h-[60vh] section-padding hero-gradient-bg" 
        >
            <div className="text-center max-w-4xl px-4">
                <AnimatedWrapper>
                    <p className="text-lg sm:text-xl text-violet-400 mb-4 font-medium" style={glowStyle}>Hello, I'm Bobby Anthene.</p>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
                        A Student of <span className="text-violet-400">Tech</span> & <span className="text-violet-400">Full Stack</span> Enthusiast.
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
                        An enthusiastic BBA IT student with a passion for software development and a drive to contribute to the field of Computer Science.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition duration-300 cursor-pointer shadow-lg hover:shadow-violet-500/50"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition duration-300 cursor-pointer"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </AnimatedWrapper>
            </div>
        </section>
    );
};

export default HeroSection;