import { useTranslations } from 'next-intl';
import { ChatInput } from './ChatInput';

export function ChatPanel() {
  const t = useTranslations('chat');

  return (
    <div className='fixed inset-x-0 bottom-0 w-full'>
      <div className='mx-auto sm:max-w-2xl sm:p-4'>
        <ChatInput placeholder={t('input.placeholder')} />
      </div>
    </div>
  );
}
