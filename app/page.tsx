import KeyVisual from "@/components/pages/keyVisual";
import { Icons } from "@/components/ui/icons";

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
