import createMiddleware from 'next-intl/middleware';
import { DEFAULT_LOCALE, LOCALES } from './types/locale';

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*'],
};
