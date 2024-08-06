import Image from "next/image";

export default function Teapot() {
  return (
    <main className='h-screen w-screen'>
      <Image src='/responseCodes/418.png' alt='teapot' fill className="object-contain" />
    </main>
  );
}
