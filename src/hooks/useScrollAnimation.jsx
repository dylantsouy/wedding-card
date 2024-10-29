import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 當元素進入視窗時
                    if (entry.isIntersecting) {
                        // 添加動畫 class
                        entry.target.classList.add('show-animate');
                        // 如果動畫只需要觸發一次，解除觀察
                        if (!options.repeat) {
                            observer.unobserve(entry.target);
                        }
                    } else if (options.repeat) {
                        // 如果需要重複動畫，當元素離開視窗時移除動畫 class
                        entry.target.classList.remove('show-animate');
                    }
                });
            },
            {
                // 元素出現多少比例時觸發動畫
                threshold: options.threshold || 0.1,
                // 提前或延後觸發的距離
                rootMargin: options.rootMargin || '0px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options.repeat, options.threshold, options.rootMargin]);

    return elementRef;
};
