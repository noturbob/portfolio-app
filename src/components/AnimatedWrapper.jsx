import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedWrapper = ({ children, delay = 0, animationType = 'slide-up', className = '' }) => {
    const [ref, isVisible] = useScrollAnimation(delay);
    
    const baseClasses = `transition-all duration-1000`;
    const transitionStyle = { transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' };
    
    let initialTransform = '';
    if (animationType === 'slide-up') initialTransform = 'translate-y-5';
    if (animationType === 'slide-left') initialTransform = 'translate-x-5';
    if (animationType === 'slide-right') initialTransform = '-translate-x-5';

    const visibilityClasses = isVisible 
        ? 'opacity-100 translate-x-0 translate-y-0' 
        : `opacity-0 ${initialTransform}`;

    return (
        <div ref={ref} className={`${baseClasses} ${visibilityClasses} ${className}`} style={transitionStyle}>
            {children}
        </div>
    );
};

export default AnimatedWrapper;