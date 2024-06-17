import { MessageChatbotIcon } from '@/components/icons/MessageChatbotIcon';
import { Separator } from '@/components/ui/separator';
import { PersonIcon } from '@radix-ui/react-icons';
import { type Message } from 'ai/react';

export function ChatMessage({ message, separator }: { message: Message; separator: boolean }) {
  const { role, content } = message;

  return (
    <div className='relative flex items-start md:ml-12'>
      <div className='flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm'>
        {role === 'user' ? <PersonIcon /> : <MessageChatbotIcon />}
      </div>
      <div className='ml-4 flex-1 space-y-2 overflow-hidden whitespace-break-spaces text-pretty pl-2'>
        {content}
        {separator ? <Separator className='my-4' /> : null}
      </div>
    </div>
  );
}
