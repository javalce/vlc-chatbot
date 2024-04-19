import { MessageChatbotIcon } from '@/components/icons/MessageChatbotIcon';
import { MESSAGE_TYPES, type MessageType } from '@/types/message';
import { PersonIcon } from '@radix-ui/react-icons';

export function ChatMessage({ type, children }: { type: MessageType; children: React.ReactNode }) {
  return (
    <div className='relative flex items-start md:ml-12'>
      <div className='flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm'>
        {type === MESSAGE_TYPES.CHATBOT && <MessageChatbotIcon />}
        {type === MESSAGE_TYPES.USER && <PersonIcon />}
      </div>
      <div className='ml-4 flex-1 space-y-2 overflow-hidden pl-2'>{children}</div>
    </div>
  );
}
