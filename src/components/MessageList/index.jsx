import './styles.scss';
import { useState, useEffect } from 'react';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { db } from '@/firebase/config';

export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [visibleMessages, setVisibleMessages] = useState([]);
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
            } else {
                setMessages([]);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        
        const updateVisibleMessages = () => {
            const endIndex = currentIndex + messagesPerPage;
            const currentMessages = messages.slice(currentIndex, endIndex);
            
            if (endIndex >= messages.length) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            
            setVisibleMessages(currentMessages);
        };

        updateVisibleMessages();

        const interval = setInterval(updateVisibleMessages, rotationInterval);

        return () => clearInterval(interval);
    }, [messages]);

    return (
        <div id="toobarshow">
            <div className="toolBar-bullet">
                <div className="bar-move">
                    <ul className="bar-b-list">
                        {visibleMessages.map((msg, index) => (
                            <li 
                                key={msg.id}
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