import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { Linkedin, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding bg-gray-950/50 border-t border-gray-800">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedWrapper>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Let's Connect</h2>
                    <p className="text-lg text-gray-400 mb-10">
                        Have a project in mind, or just want to chat about front-end performance? My inbox is always open.
                    </p>
                </AnimatedWrapper>

                <div className="space-y-6">
                    <AnimatedWrapper delay={100} animationType="slide-up">
                        <a 
                            href="mailto:bobbyanthene@gmail.com" 
                            className="block w-full text-center py-4 rounded-xl bg-violet-600 text-white text-lg font-semibold hover:bg-violet-700 transition duration-300 cursor-pointer shadow-lg hover:shadow-violet-500/50"
                        >
                            Send Me an Email
                        </a>
                    </AnimatedWrapper>
                    
                    <AnimatedWrapper delay={200} animationType="slide-up">
                        <div className="flex justify-center gap-4">
                            <a href="https://www.linkedin.com/in/bobby-anthene/" className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-violet-400 transition hover:shadow-md hover:shadow-violet-500/30">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/noturbob" className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-violet-400 transition hover:shadow-md hover:shadow-violet-500/30">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/whyisthisagony/" className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-violet-400 transition hover:shadow-md hover:shadow-violet-500/30">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;