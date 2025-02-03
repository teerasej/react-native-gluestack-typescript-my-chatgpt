import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { useColorScheme } from 'react-native';

interface ChatMessageProps {
  message: string;
  isSender: boolean;
}

function ChatMessage({ message, isSender }: ChatMessageProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <HStack className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
      <Box
        className={`p-3 m-2 rounded-md max-w-[70%] ${isSender ? 'bg-blue-500' : 'bg-green-300'}`}
      >
        <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{message}</Text>
      </Box>
    </HStack>
  );
}

export default ChatMessage;