import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import { Providers } from '@/providers';
import { type Locale } from '@/types/locale';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VLC Chatbot',
  description: 'A Valencia City Assistant Chatbot',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={cn(inter.className, 'antialiased')}>
        <Providers>
          <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='flex flex-1 flex-col bg-muted/50'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
