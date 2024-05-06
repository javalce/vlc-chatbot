import { type Message } from 'ai/react';
import { ChatMessage } from './ChatMessage';

export function ChatList({ messages }: { messages: Message[] }) {
  return (
    <>
      {messages.map((message, index) => (
        <div key={message.id}>
          <ChatMessage message={message} separator={index < messages.length - 1} />
        </div>
      ))}
    </>
  );
}
