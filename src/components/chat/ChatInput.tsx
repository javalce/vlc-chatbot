'use client';

import { Button } from '@/components/ui/button';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { type UseChatHelpers } from 'ai/react';
import { useRef } from 'react';
import Textarea from 'react-textarea-autosize';

export function ChatInput({
  placeholder,
  input,
  handleInputChange,
  handleSubmit,
}: { placeholder: string } & Pick<UseChatHelpers, 'input' | 'handleInputChange' | 'handleSubmit'>) {
  const form = useRef<HTMLFormElement>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      form.current?.requestSubmit();
      e.preventDefault();
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className='relative flex max-h-60 w-full grow flex-col justify-center overflow-hidden bg-background pr-10 sm:rounded-md sm:border sm:pr-12'>
        <Textarea
          autoComplete='off'
          autoCorrect='off'
          className='min-h-[60px] w-full resize-none overflow-hidden bg-background px-4 py-[1.3rem] focus-within:outline-none sm:text-sm'
          placeholder={placeholder}
          rows={1}
          spellCheck={false}
          tabIndex={0}
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
        />
        <div className='absolute bottom-4 right-2 sm:right-4'>
          <Button disabled={input === ''} size='icon' type='submit'>
            <PaperPlaneIcon />
            <span className='sr-only'>Enviar mensaje</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
