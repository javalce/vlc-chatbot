'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem } from '@/components/ui/select';
import { GlobeIcon } from '@radix-ui/react-icons';
import { SelectTrigger } from '@radix-ui/react-select';

export function LanguageSelector() {
  return (
    <Select defaultValue='es'>
      <SelectTrigger asChild>
        <Button size='icon' variant='ghost'>
          <GlobeIcon className='size-5' />
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='en'>English</SelectItem>
        <SelectItem value='es'>Español</SelectItem>
      </SelectContent>
    </Select>
  );
}
