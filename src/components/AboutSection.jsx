import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const AboutSection = () => {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">About Me</h2>
                    <p className="text-lg text-gray-400">A determined student bridging the gap between business and technology.</p>
                </AnimatedWrapper>

                <div className="lg:flex lg:items-start lg:justify-between gap-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                        <AnimatedWrapper animationType="slide-left">
                            <img 
                                src="/bobby.jpeg" 
                                alt="Professional portrait of Bobby" 
                                className="w-full max-w-sm sm:max-w-md lg:w-full lg:max-w-md mx-auto lg:mx-0 h-auto rounded-3xl object-cover border border-gray-700 shadow-xl"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/1F2937/F3F4F6?text=Developer+Profile"; }}
                            />
                        </AnimatedWrapper>
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <AnimatedWrapper animationType="slide-right" delay={200}>
                            <p className="text-gray-300 text-lg">
                                I am currently a third-year BBA IT student with a passion for technology and a drive to build a career in the field of Computer Science. My journey, while beginning in a business-focused discipline, has been an exciting challenge that I've embraced with consistent effort.
                            </p>
                            <p className="text-gray-300 text-lg">
                                I have cultivated a strong foundation in computer science fundamentals, successfully solving over 150 LeetCode problems in C++. Additionally, I have gained hands-on experience in web development, with a deep interest in full-stack technologies. I am now actively seeking opportunities to apply my skills and contribute to a professional team while continuing to learn and grow.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-gray-400">
                                <p><strong className="text-violet-400">Location:</strong> Hyderabad / Open to work in Mumbai</p>
                                <p><strong className="text-violet-400">Experience:</strong> Fresher</p>
                                <p><strong className="text-violet-400">Focus:</strong> Full-Stack Development & C++</p>
                                <p><strong className="text-violet-400">Currently:</strong> Available for new projects</p>
                            </div>
                        </AnimatedWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;