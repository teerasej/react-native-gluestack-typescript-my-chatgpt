
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React from 'react';
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { Button, ButtonText } from '@/components/ui/button';
import { router, Stack, useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { saveBarcode } from '@/redux/chatSlice';

export default function ScanPage() {

    const [permission, requestPermission] = useCameraPermissions();
    const dispatch:AppDispatch = useDispatch()
    const router = useRouter()

    const handleBarcodeScanned = (result:BarcodeScanningResult) => {
        console.log(result.data)
        dispatch(saveBarcode(result.data))
        router.back()
    }

    if (!permission) {
        return (
            <Box className="flex-1 justify-center align-middle">
                <Text>Requesting for camera permission...</Text>
            </Box>
        )
    }

    if (permission.granted === false) {
        return (
            <Box className="flex-1 justify-center align-middle">
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission}>
                    <ButtonText>Request permission</ButtonText>
                </Button>
            </Box>
        )
    }

    return (
        <Box className='flex-1'>
            <Stack.Screen options={{
                title: "Scan"
            }} />

            <CameraView 
                style={{ flex: 1 }}
                barcodeScannerSettings={{
                   barcodeTypes:['code128','ean13','ean8','qr']
                }}
                onBarcodeScanned={handleBarcodeScanned}
                >

            </CameraView>
        </Box>
    );
}