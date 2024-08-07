import * as React from "react";

import { cn } from "@/lib/utils";

import Image, { ImageProps } from "next/image";

const ThumbnailCardContainer = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("mt-10 grid grid-cols-3 gap-x-[2.8vw] gap-y-10", className)}
    {...props}
  />
));

ThumbnailCardContainer.displayName = "ThumbnailCardContainer";

const ThumbnailCard = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

ThumbnailCard.displayName = "ThumbnailCard";

const ThumbnailImageContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group-hover:group relative mb-4 before:absolute before:bottom-0 before:right-0 before:z-10 before:block before:h-8 before:w-8 before:rounded-tl-lg before:bg-white after:absolute after:bottom-2.5 after:right-[9px] after:z-20 after:block after:h-2 after:w-3 after:bg-arrow-right after:bg-center after:bg-no-repeat group-hover:after:animate-arrowRight",
      className,
    )}
    {...props}
  />
));

ThumbnailImageContainer.displayName = "ThumbnailImageContainer";

const ThumbnailImage = React.forwardRef<
  HTMLImageElement,
  ImageProps & React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn(
      "block h-full rounded-xl object-cover group-hover:brightness-75",
      className,
    )}
    {...props}
    fill
  />
));

ThumbnailImage.displayName = "ThumbnailImage";

const ThumbnailText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mt-2 text-xl font-bold leading-7 group-hover:underline group-hover:underline-offset-4",
      className,
    )}
    {...props}
  />
));

ThumbnailText.displayName = "ThumbnailText";

export {
  ThumbnailCardContainer,
  ThumbnailCard,
  ThumbnailImageContainer,
  ThumbnailImage,
  ThumbnailText,
};
