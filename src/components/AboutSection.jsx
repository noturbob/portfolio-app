import React, { useState } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { MapPin, Briefcase, Target, Zap } from 'lucide-react';

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Background",
            icon: Briefcase,
            content: "I am currently a third-year BBA IT student with a passion for technology and a drive to build a career in the field of Computer Science. My journey, while beginning in a business-focused discipline, has been an exciting challenge that I've embraced with consistent effort."
        },
        {
            title: "Expertise",
            icon: Zap,
            content: "I have cultivated a strong foundation in computer science fundamentals, successfully solving over 150 LeetCode problems in C++. Additionally, I have gained hands-on experience in web development, with a deep interest in full-stack technologies."
        },
        {
            title: "Goals",
            icon: Target,
            content: "I am now actively seeking opportunities to apply my skills and contribute to a professional team while continuing to learn and grow. My focus is on building scalable, user-centric solutions that make a real impact."
        }
    ];

    return (
        <section id="about" className="relative section-padding bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <AnimatedWrapper className="text-center mb-20">
                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
                        <span className="text-gradient">About Me</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        A determined <span className="text-violet-400 font-semibold">BBA IT student</span> bridging the gap between business and technology.
                    </p>
                </AnimatedWrapper>

                <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                    {/* Image Section */}
                    <AnimatedWrapper animationType="slide-left" delay={100}>
                        <div className="relative group">
                            {/* Gradient Border */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 opacity-50 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10"></div>

                            <div className="relative overflow-hidden rounded-3xl border-2 border-gray-700/50 group-hover:border-violet-400/50 transition-all duration-500">
                                <img 
                                    src="/bobby.jpeg" 
                                    alt="Professional portrait of Bobby" 
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = "https://placehold.co/800x600/1F2937/F3F4F6?text=Developer+Profile"; 
                                    }}
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                                {/* Corner Accents */}
                                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-violet-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-violet-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            </div>
                        </div>
                    </AnimatedWrapper>

                    {/* Content Section */}
                    <AnimatedWrapper animationType="slide-right" delay={200}>
                        <div className="space-y-8">
                            {/* Tab Navigation */}
                            <div className="flex gap-3">
                                {tabs.map((tab, idx) => {
                                    const TabIcon = tab.icon;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveTab(idx)}
                                            className={`group flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                                activeTab === idx
                                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                                                    : 'bg-gray-800/40 text-gray-400 hover:text-white border border-gray-700/50 hover:border-violet-400/30'
                                            }`}
                                        >
                                            <TabIcon className="w-4 h-4" />
                                            <span className="hidden sm:inline">{tab.title}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Tab Content with Animation */}
                            <div className="relative min-h-[200px]">
                                {tabs.map((tab, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 transition-all duration-500 ${
                                            activeTab === idx
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 translate-y-4 pointer-events-none'
                                        }`}
                                    >
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {tab.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-700/50">
                                <div className="glass-effect p-4 rounded-lg hover:border-violet-400/50 transition-all duration-300">
                                    <MapPin className="w-5 h-5 text-violet-400 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-white font-semibold">Hyderabad / Open to Mumbai</p>
                                </div>

                                <div className="glass-effect p-4 rounded-lg hover:border-violet-400/50 transition-all duration-300">
                                    <Briefcase className="w-5 h-5 text-violet-400 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Status</p>
                                    <p className="text-white font-semibold">Available Now</p>
                                </div>

                                <div className="glass-effect p-4 rounded-lg hover:border-violet-400/50 transition-all duration-300">
                                    <Zap className="w-5 h-5 text-violet-400 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Focus</p>
                                    <p className="text-white font-semibold">Full-Stack & C++</p>
                                </div>

                                <div className="glass-effect p-4 rounded-lg hover:border-violet-400/50 transition-all duration-300">
                                    <Target className="w-5 h-5 text-violet-400 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Experience</p>
                                    <p className="text-white font-semibold">Fresher • Growing</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;