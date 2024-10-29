import { useEffect } from 'react';

export function useScrollBehavior() {
    useEffect(() => {
        // 強制回到頂部
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };

        // 防止瀏覽器記住滾動位置
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // 頁面載入時回到頂部
        scrollToTop();

        // 監聽頁面重整
        window.onbeforeunload = () => {
            scrollToTop();
        };

        return () => {
            // 清理
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
            window.onbeforeunload = null;
        };
    }, []);
}
