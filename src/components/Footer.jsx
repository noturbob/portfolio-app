import React from 'react';

const Footer = () => (
    <footer className="py-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Bobby.dev. All rights reserved.</p>
            <p className="mt-1">Handcrafted with <span className="text-red-500">&hearts;</span> and optimized for speed.</p>
        </div>
    </footer>
);

export default Footer;