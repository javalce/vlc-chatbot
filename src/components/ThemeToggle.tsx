'use client';

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className='size-9 rounded-md' />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost'>
          <span className='sr-only'>Elige el tema</span>
          {theme === THEMES.LIGHT && <SunIcon className='size-5' />}
          {theme === THEMES.DARK && <MoonIcon className='size-5' />}
          {theme === THEMES.SYSTEM && <DesktopIcon className='size-5' />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme(THEMES.LIGHT)}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(THEMES.DARK)}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(THEMES.SYSTEM)}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
