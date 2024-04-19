'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem } from '@/components/ui/select';
import { usePathname, useRouter } from '@/navigation';
import { GlobeIcon } from '@radix-ui/react-icons';
import { SelectTrigger } from '@radix-ui/react-select';

export function LanguageSwitcherSelect({
  defaultValue,
  label,
  locales,
}: {
  defaultValue: string;
  label: string;
  locales: {
    locale: string;
    label: string;
  }[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (value: string) => {
    router.replace(pathname, { locale: value });
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger asChild>
        <Button aria-label={label} size='icon' variant='ghost'>
          <GlobeIcon className='size-5' />
        </Button>
      </SelectTrigger>
      <SelectContent>
        {locales.map(({ locale, label }) => (
          <SelectItem key={locale} value={locale}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
