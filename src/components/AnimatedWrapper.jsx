import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedWrapper = ({ children, delay = 0, animationType = 'slide-up', className = '' }) => {
    const [ref, isVisible] = useScrollAnimation(delay);
    
    const baseClasses = `transition-all duration-1000`;
    const transitionStyle = { transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' };
    
    let initialTransform = '';
    let initialOpacity = 'opacity-0';
    
    // Extended animation types
    switch(animationType) {
        case 'slide-up':
            initialTransform = 'translate-y-5';
            break;
        case 'slide-left':
            initialTransform = 'translate-x-5';
            break;
        case 'slide-right':
            initialTransform = '-translate-x-5';
            break;
        case 'scale-in':
            initialTransform = 'scale-95';
            break;
        case 'rotate-in':
            initialTransform = 'scale-90 rotate-6';
            break;
        case 'fade':
            initialTransform = '';
            break;
        case 'blur-in':
            initialTransform = '';
            initialOpacity = 'opacity-0 blur-md';
            break;
        default:
            initialTransform = 'translate-y-5';
    }

    const visibilityClasses = isVisible 
        ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0 blur-0' 
        : `${initialOpacity} ${initialTransform}`;

    return (
        <div ref={ref} className={`${baseClasses} ${visibilityClasses} ${className}`} style={transitionStyle}>
            {children}
        </div>
    );
};

export default AnimatedWrapper;