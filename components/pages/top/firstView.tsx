"use client";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { init } from "ityped";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useStatesStore } from "@/lib/store";
import { Icons } from "@/components/common/icons";
import Image from "next/image";

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
              "title absolute z-10 flex h-full w-full flex-col items-center justify-center text-5xl font-black leading-snug text-violet-300",
              fonts.lineFont.className,
            )}>
            <p>
              <span>ヒ</span>
              <span>ト</span>
              <span>と</span>
              <span className='relative'>
                ＿＿
                <span className='ityped-text absolute left-0 top-1 z-10 h-full w-full'></span>
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
          <div className='absolute bottom-0 left-0 z-0 h-full w-full'>
            <picture>
              <Image
                src='/marble.jpeg'
                alt='Photo by Drew Beamer'
                fill
                className='object-cover'
              />
            </picture>
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

function startLoopTitle(curSplit: NodeListOf<Element>): void {
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
}
