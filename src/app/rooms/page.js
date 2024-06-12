import React from 'react'
import RoomDetail from "../../components/RoomDetail";
import Image from "next/image";

const page = () => {
  return (
    <section id="rooms" className="padding_page grid grid-cols-3 gap-y-8 gap-x-10">
      <h1 className="heading col-span-full">Rooms</h1>
      <RoomDetail image={'/room-1.png'}/>
      <div className="room_info_container order-1 md:order-[0] ">
        <h3 className="header-3 md:ml-auto">ห้องธรรมดา</h3>
        <p className="mb-5 md:text-end">
          ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
        </p>
        <a href="" className="link_button !font-maehongson !tracking-widest  md:ml-auto">เรียนรู้เพิ่มเติม</a>
      </div>
      <div className="room_image">
        <Image className="room_image" src={'/room-1.png'} width={400} height={400}></Image>
        <div className="room_price room_price--left">
          <h1 className="text-accent-darken !tracking-tight">650 ฿</h1>
          <span className="text-accent-darken text-xl">/ คืน</span>
        </div>
      </div>
    </section>
  )
}

export default page