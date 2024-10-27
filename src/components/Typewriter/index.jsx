import { useEffect, useRef, useState } from "react";

export const Typewriter = ({ 
    text, 
    delay = 100,
    startDelay = 0,
    onComplete = () => {} 
}) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);
    const charIndex = useRef(-1);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && displayText === '') {
                        startTyping();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const startTyping = () => {
        timeoutRef.current = setTimeout(() => {
            setIsTyping(true);
            typeNextChar();
        }, startDelay);
    };

    const typeNextChar = () => {
        if (charIndex.current < text.length) {
            let e = text[charIndex.current] || '';
            setDisplayText(prev => prev + e);
            charIndex.current += 1;
            timeoutRef.current = setTimeout(typeNextChar, delay);
        } else {
            setIsTyping(false);
            onComplete();
        }
    };

    return (
        <div ref={containerRef} className="typewriter-container">
            <span className="typed-text">{displayText || ''}</span>
            <span className={`cursor-line ${isTyping ? 'typing' : ''}`}></span>
        </div>
    );
};

export const MultiLineTypewriter = ({ 
    lines, 
    lineDelay = 500, 
    initialDelay = 0,  // 新增的初始延遲參數
    typingDelay = 100  // 新增的打字速度參數
}) => {
    const [currentLine, setCurrentLine] = useState(0);
    const [shouldStart, setShouldStart] = useState(false);
    
    // 添加初始延遲效果
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldStart(true);
        }, initialDelay);

        return () => clearTimeout(timer);
    }, [initialDelay]);

    const handleLineComplete = () => {
        if (currentLine < lines.length - 1) {
            setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, lineDelay);
        }
    };

    if (!Array.isArray(lines) || lines.length === 0 || !shouldStart) {
        return null;
    }

    return (
        <div className="multi-line-typewriter">
            {lines.slice(0, currentLine + 1).map((line, index) => (
                <div key={index} style={{ minHeight: '1.5em' }}>
                    {index === currentLine ? (
                        <Typewriter 
                            text={line || ''} 
                            onComplete={handleLineComplete}
                            delay={typingDelay}  // 使用傳入的打字速度
                        />
                    ) : (
                        <span>{line}</span>
                    )}
                </div>
            ))}
        </div>
    );
};