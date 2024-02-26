import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     
      <Image src="/newsiya-logo.svg" alt="Vercel Logo" width={72} height={16} />
      <div className="bg-[url('/hero-img.png')] w-full h-[80vh] bg-no-repeat bg-center aspect-auto">

      </div>
    </main>
  );
}
