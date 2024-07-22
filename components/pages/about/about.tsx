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
import articleData from "@/lib/articleData";

export default function About() {
  const formatDate = (date: Date, format: string): string => {
    format = format.replace(/YYYY/, date.getFullYear().toString());
    format = format.replace(
      /MM/,
      (date.getMonth() + 1).toString().padStart(2, "0"),
    );
    format = format.replace(/DD/, date.getDate().toString().padStart(2, "0"));

    return format;
  };
  return (
    <>
      <h2
        className={cn(
          "mt-30 text-5xl font-bold leading-normal",
          fonts.luckiestGuy.className,
        )}>
        ABOUT
      </h2>
      <ThumbnailCardContainer>
        {articleData.map((article) => (
          <ThumbnailCard key={article.title}>
            <Link href={"/about/"} className='group block text-slate-600'>
              <ThumbnailImageContainer>
                <AspectRatio ratio={1.91 / 1}>
                  <ThumbnailImage src={article.src} alt={article.alt} />
                </AspectRatio>
              </ThumbnailImageContainer>
              <time
                dateTime={article.date}
                className="after:mx-4 after:inline-flex after:scale-75 after:content-['|']">
                {formatDate(new Date(article.date), "YYYY年MM月DD日")}
              </time>
              <Badge variant='outline'>{article.category}</Badge>
              <ThumbnailText>{article.title}</ThumbnailText>
            </Link>
          </ThumbnailCard>
        ))}
      </ThumbnailCardContainer>
    </>
  );
}
