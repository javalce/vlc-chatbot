export function MessageDotsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      height='24'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h24v24H0z' fill='none' stroke='none' />
      <path d='M12 11v.01' />
      <path d='M8 11v.01' />
      <path d='M16 11v.01' />
      <path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z' />
    </svg>
  );
}
