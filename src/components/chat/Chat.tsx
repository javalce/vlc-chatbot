import { ChatPanel } from './ChatPanel';
import { EmptyChat } from './EmptyChat';

export function Chat() {
  return (
    <div className='w-full overflow-auto pl-0'>
      <div className='pb-[200px] pt-4 md:pt-10'>
        <div className='mx-auto max-w-4xl px-4'>
          <EmptyChat />
        </div>
      </div>
      <ChatPanel />
    </div>
  );
}
