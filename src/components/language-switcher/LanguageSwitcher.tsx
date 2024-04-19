import { LOCALES } from '@/types/locale';
import { useLocale, useTranslations } from 'next-intl';
import { LanguageSwitcherSelect } from './LanguageSwitcherSelect';

export function LanguagerSwitcher() {
  const t = useTranslations('locale-switcher');
  const currentLocale = useLocale();

  return (
    <LanguageSwitcherSelect
      defaultValue={currentLocale}
      label={t('label')}
      locales={LOCALES.map((locale) => ({
        locale: locale,
        label: t('locale', { locale }),
      }))}
    />
  );
}
