// app/index.tsx

import React from "react";
import { Box } from "@/components/ui/box";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";
import { Link } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import ChatHistory from "./components/ChatHistoryComponent";
import ChatBoxComponent from "./components/ChatBoxComponent";

// import Provider component จาก react-redux
import { Provider } from "react-redux";
// import store จาก redux/store.ts
import { store } from "@/redux/store";

export default function Home() {
  return (
    // ใส่ Provider รอบ component ที่เราต้องการให้เข้าถึง store ได้
    <Provider store={store}>
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
    </Provider>
  );
}
