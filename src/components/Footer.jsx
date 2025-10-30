import React from 'react';
import { Heart, Code2, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => (
    <footer className="relative border-t border-gray-800/50 bg-gray-950">
        {/* Top Divider Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Code2 className="w-6 h-6 text-violet-400" />
                        <h3 className="text-xl font-bold text-white">bobby.dev</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Crafting elegant digital solutions with modern web technologies.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {[
                            { label: 'About', href: '#about' },
                            { label: 'Skills', href: '#skills' },
                            { label: 'Projects', href: '#projects' },
                            { label: 'Contact', href: '#contact' }
                        ].map(link => (
                            <li key={link.label}>
                                <a 
                                    href={link.href} 
                                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">Follow Me</h4>
                    <div className="flex gap-3">
                        {[
                            { name: 'GitHub', url: 'https://github.com/noturbob', Icon: Github },
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bobby-anthene/', Icon: Linkedin },
                            { name: 'Instagram', url: 'https://www.instagram.com/whyisthisagony/', Icon: Instagram }
                        ].map(social => {
                            const SocialIcon = social.Icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                                    title={social.name}
                                >
                                    <SocialIcon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                    &copy; {new Date().getFullYear()} Bobby.dev 
                    <span className="text-gray-700">•</span> 
                    All rights reserved
                </p>
                <p className="flex items-center justify-center gap-1">
                    Handcrafted with 
                    <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
                    and optimized for speed
                </p>
            </div>

            {/* Tech Stack Footer */}
            <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
                <p className="text-xs text-gray-600 mb-3">Built with cutting-edge technologies</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {['React 19', 'Tailwind CSS', 'Node.js', 'MongoDB'].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-gray-900 text-gray-400 text-xs border border-gray-800">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;