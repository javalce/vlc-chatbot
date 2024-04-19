import { Chat } from '@/components/chat/Chat';

export default function Home() {
  return (
    <div className='relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden'>
      <Chat />
    </div>
  );
}
