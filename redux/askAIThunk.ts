// src/redux/askAIThunk.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the structure of the request payload
interface AskAIRequest {
  prompt: string;
}

// Define the structure of the response data
interface AskAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

// Define the structure of potential errors
interface AskAIError {
  message: string;
}

// API key
const key = 'YOUR_AZURE_OPENAI_API_KEY';

// Create the async thunk
export const askAI = createAsyncThunk<string, AskAIRequest, { rejectValue: AskAIError }>(
  'user/askAI',
  async ({ prompt }, { rejectWithValue }) => {
    console.log('Asking AI...');

    // Create JSON object to send to OpenAI API
    const jsonPrompt = JSON.stringify({
      messages: [
        {
          role: 'system',
          content: 'You are an AI assistant that helps people find information.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      top_p: 0.95,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 800,
      stop: null,
    });

    console.log('Sending prompt:');
    console.log(jsonPrompt);

    try {
      // Send request using axios with the key and JSON payload
      const response = await axios.post<AskAIResponse>(
        'https://openai-nextflow.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2024-02-15-preview',
        jsonPrompt,
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': key,
          },
        }
      );

      console.log('Got response:');
      console.log(response.data.choices[0].message.content);

      // Extract and return the message content from the API response
      return response.data.choices[0].message.content;
    } catch (error: any) {
      console.error('Error fetching OpenAI:', error);
      // Return a rejected value with a custom error message
      return rejectWithValue({ message: error.message });
    }
  }
);