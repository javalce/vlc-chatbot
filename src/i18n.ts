import { LOCALES, type Locale } from '@/types/locale';
import { type AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)) as AbstractIntlMessages,
  };
});
