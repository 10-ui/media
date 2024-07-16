import FirstView from "@/components/pages/top/firstView";
import BodyContainer from "@/components/pages/top/bodyContainer";

export default function Home() {
  return (
    <main className='mainContainer min-h-screen'>
      <FirstView />
      <BodyContainer />
    </main>
  );
}
