import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import SkillCard from './SkillCard';
import { FileCode, LayoutGrid, Server, GitBranch, Database, Cloud, Code, GitPullRequest, DatabaseZap, Zap } from 'lucide-react';

const skills = [
    { name: "C++", Icon: FileCode, delay: 0 },
    { name: "React", Icon: LayoutGrid, delay: 50 },
    { name: "Node.js", Icon: Server, delay: 100 },
    { name: "Git", Icon: GitBranch, delay: 150 },
    { name: "Express", Icon: Code, delay: 200 },
    { name: "MongoDB", Icon: Database, delay: 250 },
    { name: "Python", Icon: Code, delay: 300 },
    { name: "Web Sockets", Icon: GitPullRequest, delay: 350 },
    { name: "Firebase", Icon: Cloud, delay: 400 },
    { name: "PostgreSQL", Icon: DatabaseZap, delay: 450 },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="relative section-padding bg-gradient-to-b from-gray-950 to-gray-900 border-t border-b border-gray-800/50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <AnimatedWrapper className="text-center mb-20">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-violet-400" />
                        <span className="text-sm font-medium text-violet-300">Technical Arsenal</span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
                        <span className="text-gradient">My Core Stack</span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Expertly crafted technologies and tools that power my projects.
                        <br />
                        <span className="text-violet-400 font-semibold">Always learning, always improving.</span>
                    </p>
                </AnimatedWrapper>

                {/* Skills Grid with Advanced Layout */}
                <div className="relative">
                    {/* Gradient Backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-purple-600/5 rounded-3xl pointer-events-none"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                        {skills.map((skill) => (
                            <SkillCard 
                                key={skill.name} 
                                name={skill.name} 
                                Icon={skill.Icon} 
                                delay={skill.delay} 
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <AnimatedWrapper delay={500} animationType="slide-up" className="mt-24 pt-16 border-t border-gray-700/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "150+", label: "LeetCode Solved" },
                            { number: "5+", label: "Major Projects" },
                            { number: "10", label: "Tech Stack" },
                            { number: "∞", label: "Passion Level" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                    {stat.number}
                                </p>
                                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedWrapper>
            </div>
        </section>
    );
};

export default SkillsSection;