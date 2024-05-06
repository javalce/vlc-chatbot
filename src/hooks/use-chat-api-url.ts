import { API_URL } from '@/constants/api';
import { useLocale } from 'next-intl';
import { useMemo } from 'react';

export function useChatApiUrl() {
  const locale = useLocale();

  const apiUrl = useMemo(() => {
    const url = new URL(`${API_URL}/api/chat`);

    url.searchParams.set('locale', locale);

    return url.toString();
  }, [locale]);

  return {
    apiUrl,
  };
}
