'use client';

import { useChatApiUrl } from '@/hooks/use-chat-api-url';
import { useChat } from 'ai/react';
import { ChatList } from './ChatList';
import { ChatPanel } from './ChatPanel';
import { EmptyChat } from './EmptyChat';

export function Chat({
  inputPlaceholder,
  emptyChatMessage,
}: {
  inputPlaceholder: string;
  emptyChatMessage: string;
}) {
  const { apiUrl } = useChatApiUrl();

  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: apiUrl,
    streamMode: 'text',
  });

  return (
    <div className='w-full overflow-auto pl-0'>
      <div className='pb-[200px] pt-4 md:pt-10'>
        <div className='mx-auto max-w-4xl px-4'>
          <EmptyChat emptyChatMessage={emptyChatMessage} separator={messages.length > 0} />
          {messages.length > 0 ? <ChatList messages={messages} /> : null}
        </div>
      </div>
      <ChatPanel
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        inputPlaceholder={inputPlaceholder}
      />
    </div>
  );
}
