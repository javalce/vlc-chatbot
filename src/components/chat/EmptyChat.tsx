import { Separator } from '@/components/ui/separator';
import { generateId } from 'ai';
import { ChatMessage } from './ChatMessage';

export function EmptyChat({
  emptyChatMessage,
  separator,
}: {
  emptyChatMessage: string;
  separator: boolean;
}) {
  return (
    <>
      <ChatMessage
        message={{
          id: generateId(),
          content: emptyChatMessage,
          role: 'assistant',
        }}
      />
      {separator ? <Separator className='my-4' /> : null}
    </>
  );
}
