import Image from "next/image";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroCarousel from "./components/HeroCarousel";
import MyMap from "./components/MyMap";
import ServicesCarousel from "./components/ServicesCarousel";
import ReviewsSlider from "./components/ReviewsSlider";

export default function Home() {
  return (
    <>
      <main className="bg-primary h-[100vh] rounded-b-[4rem] flex flex-col">
        <HeroCarousel/>
        <header className="padding_page flex items-center justify-center justify-between flex-1">
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
              <p className="text-xl">จาก agoda</p>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center">
                <ul className="flex">
                  <Image className="rounded-full border-primary border-[3px]" src='/avatar-2.jpg' width={48} height={48} alt='avatar'></Image>
                  <Image className="rounded-full border-primary border-[3px] ml-[-20px]" src='/avatar-1.jpg' width={48} height={48} alt='avatar'></Image>
                </ul>
      
                <h1 className="text-accent-darken">34+</h1>
              </span>
              <div className="flex items-center">
                <p className="text-xl">รีวิวจากผู้เข้าพัก</p>
                <IoIosArrowRoundForward className="w-[2.4rem] h-[2.4rem] stroke-accent-darken"/>
              </div>
            </div>
          </div>
        </header>
      </main>
      <section id="rooms" className="padding_page grid grid-cols-3 py-10 gap-y-8 gap-x-10">
        <h1 className="heading col-span-full ">Rooms</h1>
        <div className="room_image">
        <Image className="room_image" src={'/room-1.png'} width={400} height={400}>
        </Image>
        <div className="room_price room_price--right">
          <h1 className="text-accent-darken !tracking-tight">800 ฿</h1>
          <span className="text-accent-darken text-xl">/ คืน</span>
        </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="header-3">ห้องสวีท</h3>
          <p className="mb-5">
            ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
          </p>
          <a href="" className="link_button !font-maehongson !tracking-widest">เรียนรู้เพิ่มเติม</a>
        </div>

        <div className="flex flex-col items-end justify-center">
          <h3 className="header-3">ห้องธรรมดา</h3>
          <p className="mb-5 text-end">
            ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
          </p>
          <a href="" className="link_button !font-maehongson !tracking-widest">เรียนรู้เพิ่มเติม</a>
        </div>
        <div className="room_image">
          <Image className="room_image" src={'/room-1.png'} width={400} height={400}></Image>
          <div className="room_price room_price--left">
            <h1 className="text-accent-darken !tracking-tight">650 ฿</h1>
            <span className="text-accent-darken text-xl">/ คืน</span>
          </div>
        </div>
      </section>
      <section id="services" className="bg-primary py-10 align-center justify-center flex flex-col items-center">
        <h1 className="mb-5 heading">Services</h1>

        <ServicesCarousel />
      </section>
      <section id="reviews" className="bg-white py-20 !pr-0">
      <h1 className="heading mb-5 padding_page ">Reviews</h1>
      <ReviewsSlider />

      </section>
  <section id="maps" className="flex gap-[5vw] bg-primary">
    <MyMap className="w-[60vw] h-[40vh]" />
    <div className="mt-[4vh] ">
      <h1 className="heading mb-5">Contants</h1>
      <p className="w-[36ch]">
        ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
      </p>
    </div>
  </section>
    </>
  );
}
