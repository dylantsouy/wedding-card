import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './styles.scss'
import React, { useState } from 'react';

export const ScrollAnimation = ({
    children,
    animation = 'fade',
    delay = 0,
    duration = 'normal',
    className = '',
    threshold = 0.1,
    rootMargin = '0px',
    debug = false
}) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [intersectionRatio, setIntersectionRatio] = useState(0);
    
    const elementRef = useScrollAnimation({
        threshold,
        rootMargin,
        onIntersect: (entry) => {
            setIntersectionRatio(Math.round(entry.intersectionRatio * 100));
            if (entry.isIntersecting && !isAnimated) {
                setIsAnimated(true);
            }
        }
    });

    const getDurationClass = () => {
        if (typeof duration === 'number') {
            return ''; 
        }
        return `duration-${duration}`;
    };

    const style = {
        '--delay': `${delay}ms`,
        ...(typeof duration === 'number' ? { '--duration': `${duration}s` } : {})
    };

    return (
        <div
            ref={elementRef}
            className={`
                scroll-animate 
                ${animation} 
                ${getDurationClass()}
                ${isAnimated ? 'show-animate' : ''}
                ${className}
                ${debug ? 'debug-outline' : ''}
            `}
            style={style}
        >
            {debug && (
                <div className="debug-info">
                    <span>可見度: {intersectionRatio}%</span>
                    <span>動畫: {animation}</span>
                    <span>速度: {typeof duration === 'number' ? `${duration}s` : duration}</span>
                    <span>狀態: {isAnimated ? '已觸發' : '未觸發'}</span>
                </div>
            )}
            {children}
        </div>
    );
};