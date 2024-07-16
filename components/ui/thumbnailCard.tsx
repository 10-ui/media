import * as React from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";

const ThumbnailCardContainer = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("grid grid-cols-3 gap-x-[2.8vw] gap-y-[40px]", className)}
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

const ThumbnailImage = () => {
  return (
    <div className='relative'>
      <Image src='/images/works/works-1.png' alt='works-1' fill />
    </div>
  );
};

export { ThumbnailCardContainer, ThumbnailCard, ThumbnailImage };
