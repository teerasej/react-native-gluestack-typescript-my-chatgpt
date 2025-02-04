import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { askAI } from './askAIThunk';

interface Message {
    text: string;
    isSender: boolean;
}

interface ChatState {
    chatHistory: Message[];
    barcode: string;
}

const initialState: ChatState = {
    chatHistory: [
        { text: 'Hello!', isSender: true },
        { text: 'Hi there!', isSender: false },
        { text: 'How are you?', isSender: true },
        { text: 'I am good, thanks!', isSender: false },
    ],
    barcode: ''
};

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addNewMessageToChatHistory: (state: ChatState, action: PayloadAction<Message>) => {
            console.log(`adding message to history: [${action.type}] ${action.payload}`);
            state.chatHistory.push(action.payload);
        },
        saveBarcode: (state: ChatState, action: PayloadAction<string>) => {
            console.log(`saving barcode: ${action.payload}`);
            state.barcode = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(askAI.fulfilled, (state, action: PayloadAction<string>) => {
            console.log(`adding AI response to history: [${action.type}] ${action.payload}`);
            state.chatHistory.push({ text: action.payload, isSender: false });
        });
        builder.addCase(askAI.rejected, (state, action) => {
            console.error(`AI request failed: [${action.type}] ${action.error.message}`);
            state.chatHistory.push({ text: 'AI request failed. Please try again.', isSender: false });
        });
    }
});

export const { addNewMessageToChatHistory, saveBarcode } = chatSlice.actions;

export default chatSlice.reducer;