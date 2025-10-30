import React, { useState } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { Linkedin, Github, Instagram, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    const [emailHovered, setEmailHovered] = useState(false);

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/bobby-anthene/",
            Icon: Linkedin,
            color: "from-blue-600 to-blue-400",
            delay: 100
        },
        {
            name: "GitHub",
            url: "https://github.com/noturbob",
            Icon: Github,
            color: "from-gray-600 to-gray-400",
            delay: 200
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/whyisthisagony/",
            Icon: Instagram,
            color: "from-pink-600 to-pink-400",
            delay: 300
        }
    ];

    return (
        <section id="contact" className="relative section-padding bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden border-t border-gray-800/50">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <AnimatedWrapper className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 backdrop-blur-sm">
                        <MessageSquare className="w-4 h-4 text-violet-400" />
                        <span className="text-sm font-medium text-violet-300">Get In Touch</span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind, or just want to chat about tech?
                        <br className="hidden sm:inline" />
                        <span className="text-violet-400 font-semibold">My inbox is always open.</span>
                    </p>
                </AnimatedWrapper>

                {/* Main Email CTA */}
                <AnimatedWrapper delay={100} animationType="scale-in" className="mb-16">
                    <a 
                        href="mailto:bobbyanthene@gmail.com"
                        onMouseEnter={() => setEmailHovered(true)}
                        onMouseLeave={() => setEmailHovered(false)}
                        className="block w-full relative group overflow-hidden"
                    >
                        {/* Animated Border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10"></div>

                        <div className="relative w-full py-6 px-8 rounded-xl bg-gradient-to-r from-gray-900 to-gray-900 border-2 border-gray-700 group-hover:border-violet-400 group-hover:from-gray-800 group-hover:to-gray-900 transition-all duration-500 flex items-center justify-between">
                            <div className="text-left">
                                <p className="text-sm font-semibold text-gray-400 group-hover:text-violet-400 transition-colors mb-1">
                                    Send me an email
                                </p>
                                <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                                    bobbyanthene@gmail.com
                                </p>
                            </div>
                            
                            <Mail className={`w-8 h-8 text-violet-400 transition-all duration-500 ${emailHovered ? 'translate-x-2 scale-110' : 'scale-100'}`} />
                        </div>
                    </a>
                </AnimatedWrapper>

                {/* Social Links */}
                <AnimatedWrapper delay={200} animationType="slide-up">
                    <div className="text-center mb-8">
                        <p className="text-gray-400 font-semibold mb-6">Or connect with me on social media</p>
                        
                        <div className="flex justify-center gap-4 flex-wrap">
                            {socialLinks.map((social) => {
                                const Icon = social.Icon;
                                return (
                                    <a 
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative"
                                    >
                                        {/* Gradient Background */}
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 rounded-full`}></div>

                                        {/* Icon Container */}
                                        <div className="relative w-14 h-14 rounded-full bg-gray-800 border border-gray-700 group-hover:border-transparent flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>

                                        {/* Label */}
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {social.name}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedWrapper>

                {/* Alternative Contact Options */}
                <AnimatedWrapper delay={300} animationType="slide-up" className="mt-20 pt-12 border-t border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-effect p-8 rounded-xl hover:border-violet-400/50 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-all">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Direct Email</h3>
                                    <p className="text-gray-400 text-sm">Response time: 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-effect p-8 rounded-xl hover:border-violet-400/50 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                                    <Linkedin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">LinkedIn Message</h3>
                                    <p className="text-gray-400 text-sm">Quick professional inquiries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedWrapper>

                {/* Closing Statement */}
                <AnimatedWrapper delay={400} animationType="fade" className="text-center mt-16">
                    <p className="text-gray-500 text-sm">
                        Whether it's a project opportunity, collaboration, or just to say hello—
                        <br className="hidden sm:inline" />
                        <span className="text-violet-400 font-semibold">I'd love to hear from you!</span>
                    </p>
                </AnimatedWrapper>
            </div>
        </section>
    );
};

export default ContactSection;