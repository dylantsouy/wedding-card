import { useEffect } from 'react';

export const useScrollControl = (options = {}) => {
    const {
        speed = 1,          // 1 = 正常速度, 2 = 兩倍速度, 0.5 = 半速
        smoothness = 16,    // 越小越平滑
        minSpeed = 0.1,     // 最小滾動速度
    } = options;

    useEffect(() => {
        let isScrolling = false;
        let frameId = null;
        let targetScrollTop = window.pageYOffset;
        let lastTime = performance.now();

        // 平滑滾動函數
        const smoothScroll = (currentTime) => {
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;
            
            const currentScrollTop = window.pageYOffset;
            const diff = targetScrollTop - currentScrollTop;
            
            // 如果差距很小，直接到達目標位置
            if (Math.abs(diff) < 0.5) {
                window.scrollTo(0, targetScrollTop);
                isScrolling = false;
                return;
            }

            // 計算滾動距離
            const scrollStep = (diff * smoothness * speed) / 100;
            
            // 確保最小滾動速度
            const finalStep = Math.sign(scrollStep) * Math.max(
                Math.abs(scrollStep),
                Math.abs(diff * minSpeed)
            );

            // 應用滾動
            window.scrollTo(0, currentScrollTop + finalStep);
            frameId = requestAnimationFrame(smoothScroll);
        };

        // 處理滾動事件
        const handleScroll = (event) => {
            event.preventDefault();

            // 計算目標滾動位置
            const delta = event.deltaY * speed;
            targetScrollTop = Math.max(
                0,
                Math.min(
                    targetScrollTop + delta,
                    document.documentElement.scrollHeight - window.innerHeight
                )
            );

            // 如果沒有正在滾動，開始滾動動畫
            if (!isScrolling) {
                isScrolling = true;
                lastTime = performance.now();
                frameId = requestAnimationFrame(smoothScroll);
            }
        };

        // 觸摸設備的處理
        let touchStartY = 0;
        
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
        };

        const handleTouchMove = (event) => {
            const touchY = event.touches[0].clientY;
            const delta = (touchStartY - touchY) * speed;
            touchStartY = touchY;

            targetScrollTop = Math.max(
                0,
                Math.min(
                    targetScrollTop + delta,
                    document.documentElement.scrollHeight - window.innerHeight
                )
            );

            if (!isScrolling) {
                isScrolling = true;
                lastTime = performance.now();
                frameId = requestAnimationFrame(smoothScroll);
            }
        };

        // 添加事件監聽
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [speed, smoothness, minSpeed]);
};