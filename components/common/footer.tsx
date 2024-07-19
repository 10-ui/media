import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "@/components/common/icons";

export default function Footer() {
  return (
    <footer className='w-full bg-footer'>
      <div
        className={cn(
          "flex w-full flex-row items-center justify-center gap-8 border-b border-[#464646] py-8",
          fonts.redHatDisplay.className,
        )}>
        <Button
          variant='navigation'
          className='text-lg text-white hover:text-white/80'
          asChild>
          <Link href='/works'>Works</Link>
        </Button>
        <Button
          variant='navigation'
          className='text-lg text-white hover:text-white/80'
          asChild>
          <Link href='/about'>About</Link>
        </Button>
        <Button
          variant='navigation'
          className='text-lg text-white hover:text-white/80'
          asChild>
          <Link href='https://zenn.dev/10_ui'>
            Blog
            <Icons.arrowRightUp className='h-3.5 w-3.5' />
          </Link>
        </Button>
      </div>
      <p className='py-12 text-center text-slate-300'>
        © 2024 10-ui All Rights Reserved.
      </p>
    </footer>
  );
}
