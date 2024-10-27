import { useEffect, useRef } from "react";
import './styles.scss'

export const BounceText = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const chars = containerRef.current.querySelectorAll('.character');
                        chars.forEach((char, index) => {
                            setTimeout(() => {
                                char.classList.add('animate');
                            }, index * 200);
                        });
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="bounce-text-container">
            {text.split('').map((char, index) => (
                <span 
                    key={index} 
                    className={`character ${char === ' ' ? 'space' : ''}`}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};
