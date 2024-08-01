import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import ThumbnailCards from "@/components/common/thumbnailCards";
import articleData from "@/lib/articleData";

export default function BodyContainer() {
  return (
    <div className='body-container px-[5vw] py-10'>
      <div className='body-inner mx-auto max-w-276'>
        <section>
          <h2
            className={cn(
              "mt-30 text-5xl font-bold leading-normal",
              fonts.luckiestGuy.className,
            )}>
            WORKS
          </h2>
          <ThumbnailCards articleData={articleData} limit={6} />
        </section>
        <section>
          <h2
            className={cn(
              "mt-30 text-5xl font-bold leading-normal",
              fonts.luckiestGuy.className,
            )}>
            ABOUT
          </h2>
          <ThumbnailCards articleData={articleData} />
        </section>
      </div>
    </div>
  );
}
