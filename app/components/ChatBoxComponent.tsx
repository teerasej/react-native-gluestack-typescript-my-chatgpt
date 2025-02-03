// app/components/ChatBoxComponent.tsx

import React, { useState } from 'react';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ChevronRightIcon } from '@/components/ui/icon';


import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';


import { addNewMessageToChatHistory } from '@/redux/chatSlice';
import { askAI } from '@/redux/askAIThunk';

const ChatBoxComponent = () => {
    const [message, setMessage] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleTextChange = (text:string) => {
        setMessage(text);
    }

    const handleSendMessage = () => {
        if (message.trim()) {
            const action = addNewMessageToChatHistory({ text: message, isSender: true });
            dispatch(action);

            const actionThunk = askAI({ prompt: message });
            dispatch(actionThunk);
            setMessage(''); // Clear the input field after sending the message
        }
    };

    return (
        <HStack space="md" className="mt-auto">
            <Input style={{ flex: 1 }}>
                <InputField 
                    placeholder="Enter text" 
                    value={message} 
                    onChangeText={handleTextChange} 
                />
            </Input>
            <Button onPress={handleSendMessage}>
                <ButtonIcon as={ChevronRightIcon} />
            </Button>
        </HStack>
    );
};

export default ChatBoxComponent;