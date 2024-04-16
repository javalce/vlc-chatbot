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
import { cn } from '@/lib/utils';

const THEMES = {
  light: 'light',
  dark: 'dark',
  system: 'system',
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const updateTheme = (theme: string) => () => setTheme(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost'>
          <span className='sr-only'>Elige el tema</span>
          <SunIcon
            className={cn('size-5', {
              'scale-0': theme !== THEMES.light,
              'scale-100': theme === THEMES.light,
            })}
          />
          <MoonIcon
            className={cn('absolute size-5', {
              'scale-0': theme !== THEMES.dark,
              'scale-100': theme === THEMES.dark,
            })}
          />
          <DesktopIcon
            className={cn('absolute size-5', {
              'scale-0': theme !== THEMES.system,
              'scale-100': theme === THEMES.system,
            })}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={updateTheme(THEMES.light)}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={updateTheme(THEMES.dark)}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={updateTheme(THEMES.system)}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
