import Image from "next/image";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <main className="bg-primary h-[100vh]">
      <HeroCarousel></HeroCarousel>
      <header className="padding_page flex items-center mt-10 justify-between">
        <div className="">
          <h1 className="text-accent-darken ">ที่พักชั้นหนึ่งสำหรับความสบายที่คุ้มค่า</h1>
          <h1 className="text-primary-darken">ในการเดินทางธุรกิจของคุณ </h1>
        </div>

        <div className="flex gap-[4vw] justify-center">
          <div className="">
            <span className="flex items-center">
              <h1 className="text-accent-darken">7.0</h1>
            <IoMdStarOutline  className="w-[4.6vw] h-[4.6vw] max-h-[4rem] max-w-[4rem] text-accent-darken" />
            </span>
            <p className="text-xl ">จาก agoda</p>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center">
              <ul className="flex">
                <Image className="rounded-full border-primary border-[3px]" src='/avatar-2.jpg' width={48} height={48} alt='avatar'></Image>
                <Image className="rounded-full border-primary border-[3px] ml-[-20px]" src='/avatar-1.jpg' width={48} height={48} alt='avatar'></Image>
              </ul>
              
              <h1 className="text-accent-darken">34+</h1>
            </span>
            <div className="flex items-center mt-auto">
              <p className="text-xl">รีวิวจากผู้เข้าพัก</p>
              <IoIosArrowRoundForward className="w-[2.4rem] h-[2.4rem] stroke-accent-darken"/>
            </div>
          </div>
        </div>
      </header>
      <section className="padding_page h-screen">

      </section>

    </main>
  );
}
