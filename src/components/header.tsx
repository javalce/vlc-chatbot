import { MessageDotsIcon } from '@/components/icons/MessageDotsIcon';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className='sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4'>
      <div className='flex items-center gap-x-3'>
        <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight'>VLC Chatbot</h1>
        <MessageDotsIcon className='size-7' />
      </div>
      <div className='flex flex-1 items-center justify-end gap-x-2'>
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}
