// hooks/useDelayedAutoScroll.js
import { useEffect, useRef, useState } from 'react';

export const useDelayedAutoScroll = (options = {}) => {
    const {
        speed = 0.5,
        initialDelay = 4000,
        pauseDuration = 5000,
        enabled = true,
    } = options;

    const scrollTimerRef = useRef(null);
    const pauseTimeoutRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const lastScrollPosition = useRef(0);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    useEffect(() => {
        if (!enabled) return;
        let startTime = Date.now();

        const performScroll = () => {
            // 檢查初始延遲
            if (Date.now() - startTime < initialDelay) {
                scrollTimerRef.current = setTimeout(performScroll, 16);
                return;
            }

            if (!isPaused) {
                const currentPosition = window.pageYOffset;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

                if (currentPosition < maxScroll) {
                    // 使用較小的增量來確保更平滑的滾動
                    const scrollAmount = isMobile ? speed * 0.5 : speed;
                    const nextPosition = Math.min(currentPosition + scrollAmount, maxScroll);
                    
                    window.scrollTo({
                        top: nextPosition,
                        behavior: 'auto'
                    });
                }
            }

            scrollTimerRef.current = setTimeout(performScroll, 16);
        };

        // 開始滾動
        scrollTimerRef.current = setTimeout(performScroll, 16);

        // 處理使用者互動
        const handleUserInteraction = (e) => {
            // 防止過於頻繁的觸發
            if (Date.now() - lastScrollPosition.current < 100) return;
            lastScrollPosition.current = Date.now();

            setIsPaused(true);

            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }

            pauseTimeoutRef.current = setTimeout(() => {
                setIsPaused(false);
            }, pauseDuration);
        };

        // 手機特定的事件處理
        if (isMobile) {
            document.addEventListener('touchstart', handleUserInteraction, { passive: true });
            document.addEventListener('touchmove', handleUserInteraction, { passive: true });
        } else {
            // 桌面設備的事件處理
            window.addEventListener('wheel', handleUserInteraction, { passive: true });
            window.addEventListener('mousedown', handleUserInteraction, { passive: true });
        }

        // 清理函數
        return () => {
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current);
            }
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }

            if (isMobile) {
                document.removeEventListener('touchstart', handleUserInteraction);
                document.removeEventListener('touchmove', handleUserInteraction);
            } else {
                window.removeEventListener('wheel', handleUserInteraction);
                window.removeEventListener('mousedown', handleUserInteraction);
            }
        };
    }, [enabled, initialDelay, speed, isPaused, pauseDuration, isMobile]);

    return isPaused;
};