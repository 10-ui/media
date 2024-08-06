"use client";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { init } from "ityped";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useStatesStore } from "@/lib/store";
import { Icons } from "@/components/common/icons";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

export default function FirstView() {
  const isScrolled = useStatesStore((state) => state.isScrolled);
  useGSAP(() => {
    const itypeText = document.querySelector(".ityped-text") as Element;
    const curSplit: NodeListOf<Element> = document.querySelectorAll(
      ".keyVisual_wrapper .title p span",
    );

    init(itypeText, {
      showCursor: false,
      strings: ["ヒト", "モノ", "コト"],
      typeSpeed: 400,
      backSpeed: 300,
      startDelay: 500,
      backDelay: 1500,
      loop: true,
    });

    gsap.fromTo(
      curSplit,
      { alpha: 0 },
      {
        delay: (index: number) => Math.random() * 0.6,
        stagger: 0,
        opacity: 1,
        ease: "power2.inOut",
        onComplete: startLoopTitle.bind(null, curSplit),
      },
    );
    gsap.to(".keyvisual_wrapper .title p", { alpha: 1 });
  }, []);

  const startLoopTitle = (curSplit: NodeListOf<Element>): void => {
    curSplit.forEach((tg: Element) => {
      const time = 1.0;
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: Math.random() * 3 + 3,
      });
      tl.to(tg, {
        delay: Math.random() * 2,
        opacity: 0.4,
        duration: time,
        ease: "power1.inOut",
      }).to(tg, { opacity: 1, duration: time, ease: "power1.inOut" });
    });
  };
  return (
    <>
      <div className='keyVisual relative w-full'>
        <div
          className={cn(
            "keyVisual_wrapper relative mx-10 mt-25 h-[calc(100vh-280px)] overflow-hidden rounded-3xl transition-all duration-500",
            isScrolled && "mt-16",
          )}>
          <div
            className={cn(
              "title absolute z-10 flex h-full w-full flex-col items-center justify-center text-7xl font-black leading-snug",
              fonts.lineFont.className,
            )}>
            <p className='text-white'>
              <span>ヒ</span>
              <span>ト</span>
              <span>と</span>
              <span className='relative'>
                ＿＿
                <span className='ityped-text absolute left-0 top-1.5 z-10 h-full w-full'></span>
              </span>
              <span>を</span>
              <br />
              <span>つ</span>
              <span>な</span>
              <span>ぐ</span>
              <span>こ</span>
              <span>と</span>
              <span>が</span>
              <span>で</span>
              <span>き</span>
              <span>る</span>
              <span>、</span>
              <br />
              <span>そ</span>
              <span>ん</span>
              <span>な</span>
              <span>エ</span>
              <span>ン</span>
              <span>ジ</span>
              <span>ニ</span>
              <span>ア</span>
              <span>へ</span>
              <span>。</span>
            </p>
          </div>
          <div className='absolute bottom-0 left-0 z-0 h-full w-full after:absolute after:inset-0 after:z-[4] after:bg-black/45'>
            <Carousel
              className='h-[calc(100vh-280px)] w-full'
              opts={{ loop: true, containScroll: false }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
                Fade(),
              ]}>
              <CarouselContent className='ml-0 h-[calc(100vh-280px)]'>
                <CarouselItem className='pl-0'>
                  <Image
                    src='/tops/top_siberian.jpeg'
                    alt='お気に入りのサイベリアンの画像'
                    fill
                    className='object-cover'
                  />
                </CarouselItem>
                <CarouselItem className='pl-0'>
                  <Image
                    src='/tops/top_menhera.png'
                    alt='menhera Productで使用した画像'
                    fill
                    className='object-cover'
                  />
                </CarouselItem>
                <CarouselItem className='pl-0'>
                  <Image
                    src='/articles/shinyPokedex_2024.png'
                    alt='ポケモン図鑑の画像'
                    fill
                    className='object-cover'
                  />
                </CarouselItem>
                <CarouselItem className='pl-0'>
                  <Image
                    src='/articles/blog_2023.png'
                    alt='ブログの画像'
                    fill
                    className='object-cover'
                  />
                </CarouselItem>
                <CarouselItem className='pl-0'>
                  <Image
                    src='/articles/shinkyu_2023.jpg'
                    alt='進級制作のfv画像'
                    fill
                    className='object-cover'
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='upDown mt-10 flex w-full animate-upDown justify-center'>
        <Icons.scrollDown
          className={cn(
            "transition-all duration-500",
            isScrolled && "opacity-0",
          )}
        />
      </div>
    </>
  );
}
