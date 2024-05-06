import { MessageChatbotIcon } from '@/components/icons/MessageChatbotIcon';
import { PersonIcon } from '@radix-ui/react-icons';
import { type Message } from 'ai/react';

export function ChatMessage({ message }: { message: Message }) {
  const { role, content } = message;

  return (
    <div className='relative flex items-start md:ml-12'>
      <div className='flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm'>
        {role === 'user' ? <PersonIcon /> : <MessageChatbotIcon />}
      </div>
      <div className='ml-4 flex-1 space-y-2 overflow-hidden text-pretty pl-2'>{content}</div>
    </div>
  );
}
