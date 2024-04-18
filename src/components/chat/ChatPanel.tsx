import { ChatInput } from './ChatInput';

export function ChatPanel() {
  return (
    <div className='fixed inset-x-0 bottom-0 w-full'>
      <div className='mx-auto sm:max-w-2xl sm:p-4'>
        <ChatInput />
      </div>
    </div>
  );
}
