import { ChatMessage } from './ChatMessage';

export function EmptyChat({ emptyChatMessage }: { emptyChatMessage: string }) {
  return (
    <ChatMessage messageRole='assistant'>
      <p>{emptyChatMessage}</p>
    </ChatMessage>
  );
}
