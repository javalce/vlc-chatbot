'use client';

import { useChat } from 'ai/react';
import { ChatPanel } from './ChatPanel';
import { EmptyChat } from './EmptyChat';

export function Chat({
  api,
  inputPlaceholder,
  emptyChatMessage,
}: {
  api: string;
  inputPlaceholder: string;
  emptyChatMessage: string;
}) {
  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api,
    streamMode: 'text',
  });

  return (
    <div className='w-full overflow-auto pl-0'>
      <div className='pb-[200px] pt-4 md:pt-10'>
        <div className='mx-auto max-w-4xl px-4'>
          <EmptyChat emptyChatMessage={emptyChatMessage} />
        </div>
      </div>
      <ChatPanel
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        inputPlaceholder={inputPlaceholder}
        messages={messages}
      />
    </div>
  );
}
