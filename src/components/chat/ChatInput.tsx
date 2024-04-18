'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import Textarea from 'react-textarea-autosize';

const formSchema = z.object({
  message: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export function ChatInput() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={() => form.handleSubmit(onSubmit)}>
        <div className='relative flex max-h-60 w-full grow flex-col justify-center overflow-hidden bg-background pr-8 sm:rounded-md sm:border sm:pr-12'>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    autoComplete='off'
                    autoCorrect='off'
                    className='min-h-[60px] w-full resize-none overflow-hidden bg-background px-4 py-[1.3rem] focus-within:outline-none sm:text-sm'
                    placeholder='Escribe un mensaje...'
                    rows={1}
                    spellCheck={false}
                    tabIndex={0}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='absolute bottom-4 right-0 sm:right-4'>
            <Button disabled={!form.formState.isValid} size='icon' type='submit'>
              <PaperPlaneIcon />
              <span className='sr-only'>Enviar mensaje</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
