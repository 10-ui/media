"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/fonts";
import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useStatesStore } from "@/lib/store";

export default function Header() {
  const { isScrolled, setIsScrolled } = useStatesStore((state) => ({
    isScrolled: state.isScrolled,
    setIsScrolled: state.setIsScrolled,
  }));

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-20 flex h-25 w-full items-center justify-between bg-background px-10 transition-all duration-500",
        isScrolled && "h-16 border-b shadow-sm",
      )}>
      <div className={fonts.cinzelDecorative.className}>
        <h1 className='text-3xl font-bold'>SENTARO</h1>
      </div>
      <div
        className={cn(
          "flex items-center gap-2",
          fonts.redHatDisplay.className,
        )}>
        <Button variant='navigation'>WORKS</Button>
        <Button variant='navigation'>ABOUT</Button>
        <Button variant='navigation' asChild>
          <Link href='https://zenn.dev/10_ui'>
            BLOG
            <Icons.arrowRightUp className='h-3.5 w-3.5' />
          </Link>
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='outline' size='icon' asChild>
          <Link href='https://github.com/10-ui'>
            <Icons.gitHub className='h-5 w-5' />
          </Link>
        </Button>
        <Button variant='outline' size='icon' asChild>
          <Link href='https://twitter.com/10_uis'>
            <Icons.X className='h-5 w-5' />
          </Link>
        </Button>
      </div>
    </header>
  );
}
