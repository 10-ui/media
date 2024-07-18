import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  ThumbnailCardContainer,
  ThumbnailCard,
  ThumbnailImageContainer,
  ThumbnailImage,
  ThumbnailText,
} from "@/components/ui/thumbnailCard";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BodyContainer() {
  return (
    <div className='body-container px-[5vw] py-10'>
      <h2
        className={cn(
          "text-5xl font-bold leading-normal",
          fonts.luckiestGuy.className,
        )}>
        WORKS
      </h2>
      <ThumbnailCardContainer>
        <ThumbnailCard>
          <Link href={"/works/"} className='group block text-slate-600'>
            <ThumbnailImageContainer>
              <AspectRatio ratio={1.91 / 1}>
                <ThumbnailImage
                  src={"/tops/top_siberian.jpeg"}
                  alt='top_siberian'
                />
              </AspectRatio>
            </ThumbnailImageContainer>
            <time dateTime='2024-07-18'>2024年7月18日</time>
            <Badge className='mx-4' variant='outline'>
              サイト内ブログ
            </Badge>
            <ThumbnailText>
              エンジニアとして、今の自分にしかできないこと、将来の自分がやりたいこと
            </ThumbnailText>
          </Link>
        </ThumbnailCard>
      </ThumbnailCardContainer>
    </div>
  );
}
