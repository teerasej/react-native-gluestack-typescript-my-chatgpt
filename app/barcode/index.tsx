import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';

import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Text } from '@/components/ui/text';
export default function index() {

  const router = useRouter()
  const barcode = useSelector((state:RootState) => state.chatroom.barcode)

  const handleStartScan = () => {
    router.push('/barcode/scan')
  }

  return <>
    <Stack.Screen options={{
      title: "Barcode Scanner"
    }}/>
    
      <Box className="flex-1 p-2">
        <Button onPress={handleStartScan}>
          <ButtonText>Scan</ButtonText>
        </Button>
        { 
          barcode.length > 0 ?
          <Text>{barcode}</Text> 
          : <Text></Text>
        }
      </Box>
  </>;
}