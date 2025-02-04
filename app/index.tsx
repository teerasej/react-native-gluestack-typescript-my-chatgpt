// app/index.tsx

import React from "react";
import { Link } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { Stack } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home"
        }}
      />

      <VStack className="flex-1 p-2" space="md">

        <Image source={require('assets/images/favicon.png')} size="none" />
        <Image source={{uri:'https://github.com/user-attachments/assets/37468131-3ae3-44c0-a7ab-7b4606184b62'}} size="none" />

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
