import { useTranslations } from 'next-intl';
import { ChatMessage } from './ChatMessage';

export function EmptyChat() {
  const t = useTranslations('chat');

  return (
    <ChatMessage type='chatbot'>
      <p>{t('empty')}</p>
    </ChatMessage>
  );
}
