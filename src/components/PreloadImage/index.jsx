import React, { useState, useEffect } from 'react';

export const PreloadImage = ({ smallSrc, largeSrc, alt }) => {
    const [currentSrc, setCurrentSrc] = useState(smallSrc);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 重置狀態
        setIsLoading(true);
        setError(null);

        // 預加載大圖
        const largeImg = new Image();
        largeImg.src = largeSrc;

        largeImg.onload = () => {
            setIsLoading(false);
            setCurrentSrc(largeSrc);
        };

        largeImg.onerror = () => {
            setIsLoading(false);
            setError('Failed to load image');
            // 保持顯示小圖
            setCurrentSrc(smallSrc);
        };

        return () => {
            // 清理
            largeImg.onload = null;
            largeImg.onerror = null;
        };
    }, [largeSrc, smallSrc]);

    return (
        <div className='PreloadImage'>
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <img 
                src={currentSrc} 
                alt={alt}
                className={`preload-image ${isLoading ? 'loading' : 'loaded'}`}
                onError={(e) => {
                    setError('Failed to load image');
                    e.target.src = smallSrc;
                }}
            />
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
        </div>
    );
};