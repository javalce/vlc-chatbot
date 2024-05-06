import { type UseChatHelpers } from 'ai/react';
import { ChatInput } from './ChatInput';

export function ChatPanel({
  inputPlaceholder,
  input,
  handleSubmit,
  handleInputChange,
}: {
  inputPlaceholder: string;
} & Pick<UseChatHelpers, 'input' | 'handleInputChange' | 'handleSubmit'>) {
  return (
    <div className='fixed inset-x-0 bottom-0 w-full'>
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
