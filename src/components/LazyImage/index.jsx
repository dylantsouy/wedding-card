import { useState } from 'react';

export const LazyImage = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const transparentPlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    return (
        <img
            src={src}
            className={className}
            alt={alt}
            style={{
                backgroundImage: `url(${transparentPlaceholder})`,
                opacity: isLoaded ? 1 : 0,
            }}
            onLoad={() => setIsLoaded(true)}
        />
    );
};
