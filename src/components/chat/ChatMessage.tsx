import { MessageChatbotIcon } from '@/components/icons/MessageChatbotIcon';
import { type MessageRole } from '@/types/chat';
import { PersonIcon } from '@radix-ui/react-icons';

export function ChatMessage({
  messageRole: role,
  children,
}: {
  messageRole: MessageRole;
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex items-start md:ml-12'>
      <div className='flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm'>
        {role === 'assistant' && <MessageChatbotIcon />}
        {role === 'user' && <PersonIcon />}
      </div>
      <div className='ml-4 flex-1 space-y-2 overflow-hidden pl-2'>{children}</div>
    </div>
  );
}
