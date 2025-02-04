// app/index.tsx

import React from "react";
import { Link } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { Stack } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home"
        }}
      />

      <VStack className="flex-1 p-2" space="md">
        <Link href="/chat" asChild>
          <Button>
            <ButtonText>Ask AI</ButtonText>
          </Button>
        </Link>

        <Link href="/barcode" asChild>
          <Button>
            <ButtonText>Scan Barcode</ButtonText>
          </Button>
        </Link>
      </VStack>

    </>
  );
}
