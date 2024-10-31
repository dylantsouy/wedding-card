import { push, ref } from 'firebase/database';
import './styles.scss';
import { useEffect, useRef, useState } from 'react';
import { db } from '@/firebase/config';
import { Send } from '@/assets/icons';

export const MessageInput = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [noty, setNoty] = useState({ show: false, type: '', message: '' });
    const notyTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (notyTimeoutRef.current) {
                clearTimeout(notyTimeoutRef.current);
            }
        };
    }, []);
    
    const handleNameChange = (e) => {
        const value = e.target.value;
        if (value.length <= 10) {
            setName(value);
        }
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        if (value.length <= 20) {
            setMessage(value);
        }
    };

    const showNoty = (type, message) => {
        if (notyTimeoutRef.current) {
            clearTimeout(notyTimeoutRef.current);
        }

        setNoty({ show: true, type, message });

        notyTimeoutRef.current = setTimeout(() => {
            setNoty({ show: false, type: '', message: '' });
            notyTimeoutRef.current = null;
        }, 3000);
    };

    const handleSubmit = async () => {
        if (!name.trim() || !message.trim()) {
            showNoty('error', {
                title: '請完整填寫',
                text: `請輸入${!name.trim() ? '大名' : '祝福'}後再送出`,
            });
            return;
        }

        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            const messagesRef = ref(db, 'messages');
            await push(messagesRef, {
                name: name.trim(),
                message: message.trim(),
                timestamp: new Date().toISOString(),
                status: 'pending',
            });

            setMessage('');
            showNoty('success', {
                title: '留言已送出',
                text: '請等候審核，審核通過後將會顯示',
            });
        } catch (error) {
        
            showNoty('error', {
                title: '留言失敗',
                text: '請稍後再試，或告知新郎',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {noty.show && (
                <div className={`message-noty ${noty.type}`}>
                    <div className='noty-content'>
                        <div className='noty-title'>{noty.message.title}</div>
                        <div className='noty-text'>{noty.message.text}</div>
                    </div>
                </div>
            )}
            <div id='toolbarNew'>
                <div className='toolbar'>
                    <div className='bar-left'>
                        <input type='text' className='bar-mess1' placeholder={`輸入大名...`} value={name} onChange={handleNameChange} maxLength={10} />
                        <i className='line'></i>
                        <input type='text' className='bar-mess2' placeholder={`留下祝福...`} value={message} onChange={handleMessageChange} maxLength={20} />
                    </div>
                    <div className={`toolbar-close ${!name.trim() || !message.trim() || isSubmitting ? 'disabled' : ''}`} onClick={handleSubmit}>
                        <Send />
                    </div>
                </div>
            </div>
        </>
    );
};
