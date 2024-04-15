import { ThemeProvider } from 'next-themes';
import { type ReactNode } from 'react';
import { ProviderStack } from './provider-stack';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ProviderStack
      providers={[
        [
          ThemeProvider,
          {
            attribute: 'class',
            defaultTheme: 'system',
            enableSystem: true,
            disableTransitionOnChange: true,
          },
        ],
      ]}
    >
      {children}
    </ProviderStack>
  );
}
