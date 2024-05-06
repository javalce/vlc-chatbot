import { type Message, type UseChatHelpers } from 'ai/react';
import { ChatInput } from './ChatInput';

export function ChatPanel({
  inputPlaceholder,
  messages,
  input,
  handleSubmit,
  handleInputChange,
}: {
  inputPlaceholder: string;
  messages: Message[];
} & Pick<UseChatHelpers, 'input' | 'handleInputChange' | 'handleSubmit'>) {
  return (
    <div className='fixed inset-x-0 bottom-0 w-full'>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))}
        </ul>
      ) : null}
      <div className='mx-auto sm:max-w-2xl sm:p-4'>
        <ChatInput
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
          placeholder={inputPlaceholder}
        />
      </div>
    </div>
  );
}
