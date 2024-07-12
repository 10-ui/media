import { fonts } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className='fixed left-0 top-0 flex h-16 w-full items-center justify-between px-10'>
      <div className={fonts.cinzelDecorative.className}>
        <h1 className='text-3xl font-bold'>SENTARO</h1>
      </div>
      <div
        className={cn(
          "flex items-center gap-2",
          fonts.redHatDisplay.className,
        )}>
        <Button variant='link'>WORKS</Button>
        <Button variant='link'>ABOUT</Button>
        <Button variant='link'>BLOG</Button>
      </div>
    </header>
  );
}
