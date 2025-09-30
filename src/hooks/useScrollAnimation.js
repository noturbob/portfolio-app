import { useRef, useEffect, useState } from 'react';

const useScrollAnimation = (delay = 0, threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    obs.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: threshold,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay, threshold]);

    return [ref, isVisible];
};

export default useScrollAnimation;