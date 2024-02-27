import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary h-[100vh]">
      <div className="bg-[url('/hero-img.png')] w-full h-[70vh] max-h-[60rem] bg-no-repeat bg-center aspect-auto  bg-cover rounded-b-[8vw] border-primary-darken border-b-[10px]">
      </div>
      <div className="padding_page">
        <h1 className="text-accent-darken mt-10">ที่พักชั้นหนึ่งสำหรับความสบายที่คุ้มค่า</h1>
        <h1 className="text-primary-darken">ในการเดินทางธุรกิจของคุณ </h1>
      </div>

    </main>
  );
}
