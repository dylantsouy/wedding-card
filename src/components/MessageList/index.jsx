import './styles.scss';
import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { db } from '@/firebase/config';

export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const messagesPerPage = 3;
    const rotationInterval = 5000;

    useEffect(() => {
        const messagesRef = ref(db, 'messages');
        const approvedMessagesQuery = query(
            messagesRef,
            orderByChild('status'),
            equalTo('approved')
        );

        const unsubscribe = onValue(approvedMessagesQuery, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const messagesList = Object.entries(data)
                    .map(([id, values]) => ({
                        id,
                        ...values
                    }))
                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setMessages(messagesList);
                setCurrentStartIndex(0);
            } else {
                setMessages([]);
            }
        });

        return () => unsubscribe();
    }, []);
    const getVisibleMessages = useCallback(() => {
        if (messages.length === 0) return [];
        
        const endIndex = currentStartIndex + messagesPerPage;
        // 如果到達末尾，需要從頭開始取
        if (endIndex <= messages.length) {
            return messages.slice(currentStartIndex, endIndex);
        } else {
            // 處理循環情況
            const firstPart = messages.slice(currentStartIndex);
            const remainingCount = messagesPerPage - firstPart.length;
            const secondPart = messages.slice(0, remainingCount);
            return [...firstPart, ...secondPart];
        }
    }, [messages, currentStartIndex, messagesPerPage]);

    useEffect(() => {
        if (messages.length <= messagesPerPage) return;

        const interval = setInterval(() => {
            setCurrentStartIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                // 如果到達末尾，回到開始
                return nextIndex >= messages.length ? 0 : nextIndex;
            });
        }, rotationInterval);

        return () => clearInterval(interval);
    }, [messages.length, messagesPerPage, rotationInterval]);

    const visibleMessages = getVisibleMessages();

    return (
        <div id="toobarshow">
            <div className="toolBar-bullet">
                <div className="bar-move">
                    <ul className="bar-b-list">
                        {visibleMessages.map((msg, index) => (
                            <li 
                                key={`${msg.id}-${currentStartIndex}-${index}`}
                                className="bullet-list-enter-to"
                                style={{
                                    backgroundColor: 'rgba(24, 42, 25, 0.38)',
                                    color: '#ffffff',
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {msg.name}:{msg.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};