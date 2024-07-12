import { IconProps } from "@/lib/types";

export const Icons = {
  scrollDown: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M7 13L12 18L17 13'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 6L12 11L17 6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='10'
      viewBox='0 0 12 10'
      fill='none'
      {...props}>
      <path
        d='M1 4C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6L1 4ZM1 6L11 6V4L1 4L1 6Z'
        fill='currentColor'
      />
      <path
        d='M6.71387 1L10.9996 5L6.71387 9'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  ),
};
