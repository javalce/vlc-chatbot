import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='es'>
      <body className={cn(inter.className, 'antialiased')}>
        <Providers>
          <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='flex flex-1 flex-col'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
