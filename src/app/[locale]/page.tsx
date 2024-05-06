import { Chat } from '@/components/chat/Chat';
import { CHAT_API_URL } from '@/constants/api';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('chat');

  return (
    <div className='relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden'>
      <Chat
        chatApiUrl={CHAT_API_URL}
        emptyChatMessage={t('empty')}
        inputPlaceholder={t('input.placeholder')}
      />
    </div>
  );
}
