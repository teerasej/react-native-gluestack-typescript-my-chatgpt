
// app/chat.tsx

import React from "react";
import { Box } from "@/components/ui/box";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";
import { VStack } from "@/components/ui/vstack";
import ChatHistory from "./components/ChatHistoryComponent";
import ChatBoxComponent from "./components/ChatBoxComponent";


import { Stack } from "expo-router";

export default function ChatPage() {
  return (
    
    <>
      <Stack.Screen 
        options={{
          title: "Chat with AI"
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <Box className="flex-1 bg-white h-[100vh] p-4">
            <VStack space="md" className="flex-1">
              <ChatHistory style={{ flex: 1 }} />
              <ChatBoxComponent />
            </VStack>
          </Box>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
