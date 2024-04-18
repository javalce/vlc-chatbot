import { MESSAGE_TYPES } from '@/types/message';
import { ChatMessage } from './ChatMessage';
import { ChatPanel } from './ChatPanel';

export function Chat() {
  return (
    <div className='w-full overflow-auto pl-0'>
      <div className='pb-[200px] pt-4 md:pt-10'>
        <div className='mx-auto max-w-4xl px-4'>
          <ChatMessage
            message='Bienvenido al asistente de la ciudad de Valencia. ¿En qué puedo ayudarte?'
            type={MESSAGE_TYPES.CHATBOT}
          />
        </div>
      </div>
      <ChatPanel />
    </div>
  );
}
