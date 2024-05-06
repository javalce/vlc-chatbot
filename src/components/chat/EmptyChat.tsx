import { ChatMessage } from './ChatMessage';

export function EmptyChat({ emptyChatMessage }: { emptyChatMessage: string }) {
  return (
    <ChatMessage type='chatbot'>
      <p>{emptyChatMessage}</p>
    </ChatMessage>
  );
}
