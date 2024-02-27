import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary h-[100vh]">
      <div className="bg-[url('/hero-img.png')] w-full h-[80vh] bg-no-repeat bg-center aspect-auto  bg-cover rounded-b-[8vw] border-gray-200">
      </div>
      <h1 className="font-maehongson">ที่พักชั้นหนึ่งสำหรับความสบายที่คุ้มค่า</h1>
    </main>
  );
}
