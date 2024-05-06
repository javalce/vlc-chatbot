import { Separator } from '@/components/ui/separator';
import { type Message } from 'ai/react';
import { ChatMessage } from './ChatMessage';

export function ChatList({ messages }: { messages: Message[] }) {
  return (
    <>
      {messages.map((message, index) => (
        <div key={message.id}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && <Separator className='my-4' />}
        </div>
      ))}
    </>
  );
}
