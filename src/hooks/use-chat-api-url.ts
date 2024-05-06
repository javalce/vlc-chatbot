import { useLocale } from 'next-intl';
import { useMemo } from 'react';

export function useChatApiUrl({ chatApiUrl }: { chatApiUrl: string }) {
  const locale = useLocale();

  const apiUrl = useMemo(() => {
    const url = new URL(chatApiUrl);

    url.searchParams.set('locale', locale);

    return url.toString();
  }, [chatApiUrl, locale]);

  return {
    apiUrl,
  };
}
