import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import SkillCard from './SkillCard';
import { FileCode, LayoutGrid, Server, GitBranch, Database, Cloud, Code, GitPullRequest, DatabaseZap } from 'lucide-react';

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
        <section id="skills" className="section-padding bg-gray-950/50 border-t border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">My Core Stack</h2>
                    <p className="text-lg text-gray-400">Tools and technologies that drive my projects.</p>
                </AnimatedWrapper>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} delay={skill.delay} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;