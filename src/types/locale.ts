export const LOCALE_ALIASES = {
  en: 'en',
  es: 'es',
} as const;

export const LOCALES = Object.keys(LOCALE_ALIASES);

export type Locale = keyof typeof LOCALE_ALIASES;

export const DEFAULT_LOCALE: Locale = LOCALE_ALIASES.es;
