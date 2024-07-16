import {
  ThumbnailCardContainer,
  ThumbnailCard,
} from "@/components/ui/thumbnailCard";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BodyContainer() {
  return (
    <div className='body-container py-10 px-[5vw]'>
      <h2
        className={cn(
          "text-5xl font-bold leading-normal",
          fonts.luckiestGuy.className,
        )}>
        WORKS
      </h2>
      <ThumbnailCardContainer>
        <ThumbnailCard>
          <Link href={"/works/"}></Link>
        </ThumbnailCard>
      </ThumbnailCardContainer>
    </div>
  );
}
