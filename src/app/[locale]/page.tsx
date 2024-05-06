import { Chat } from '@/components/chat/Chat';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('chat');

  return (
    <div className='relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden'>
      <Chat emptyChatMessage={t('empty')} inputPlaceholder={t('input.placeholder')} />
    </div>
  );
}
