// app/components/ChatHistoryComponent.tsx

import React, { useRef } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { VStack } from "@/components/ui/vstack";
import ChatMessage from "./ChatMessageComponent";

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Message {
    text: string;
    isSender: boolean;
}

interface ChatHistoryProps {
    messages?: Message[];
    style?: StyleProp<ViewStyle>;
}

export default function ChatHistory({ messages = [], style }: ChatHistoryProps) {
    const scrollViewRef = useRef<ScrollView>(null);
    const chatHistory = useSelector((state: RootState) => state.chatroom.chatHistory);
    messages = chatHistory || [];

    const handleContentSizeChange = () => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      };
    

    return (
        <ScrollView style={style} ref={scrollViewRef} onContentSizeChange={handleContentSizeChange}>
            <VStack space="md" className="p-2">
                {messages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        message={msg.text}
                        isSender={msg.isSender}
                    />
                ))}
            </VStack>
        </ScrollView>
    );
}
