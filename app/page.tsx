import KeyVisual from "@/components/pages/top/keyVisual";
import { Icons } from "@/components/common/icons";

export default function Home() {
  return (
    <main className='mainContainer min-h-screen'>
      <KeyVisual />
      <div className='scrollDown mt-10 flex w-full animate-upDown justify-center'>
        <Icons.scrollDown />
      </div>
    </main>
  );
}
