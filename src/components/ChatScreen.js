import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';
import { getMessages, sendMessage } from '../services/chatService';

const ChatScreen = ({ chatId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = getMessages(chatId, setMessages);
        return () => unsubscribe();
    }, []);

    const handleSend = useCallback((newMessages = []) => {
        const user = auth().currentUser;
        newMessages.forEach(message => {
            sendMessage(chatId, message.text, user);
        });
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={newMessages => handleSend(newMessages)}
            user={{
                _id: auth().currentUser.uid,
                name: auth().currentUser.email,
            }}
        />
    );
};

export default ChatScreen;
