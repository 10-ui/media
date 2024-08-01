import Link from "next/link";
import {
  ThumbnailCardContainer,
  ThumbnailCard,
  ThumbnailImageContainer,
  ThumbnailImage,
  ThumbnailText,
} from "@/components/ui/thumbnailCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export default function ThumbnailCards({
  articleData,
  limit,
}: {
  articleData: Article[];
  limit?: number;
}) {
  return (
    <ThumbnailCardContainer>
      {articleData.map(
        (article, index) =>
          (limit === undefined || index < limit) && (
            <ThumbnailCard key={article.title}>
              <Link href={article.href} className='group block text-slate-600'>
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
          ),
      )}
    </ThumbnailCardContainer>
  );
}
