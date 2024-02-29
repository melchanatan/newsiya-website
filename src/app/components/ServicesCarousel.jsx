import React from 'react'
import Image from "next/image";

const ServicesCarousel = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[5vw] w-[130vw]">
        <Image className="rounded-[40px] mb-4 w-[33%]" src={'/service-1.jpg'} width={400} height={500}></Image>
        <div className="w-[33%]">
            <Image className="rounded-[40px] mb-4 w-full" src={'/service-1.jpg'} width={400} height={500}></Image>
            <div className="text-center items-center flex flex-col">
                <h3 className="header-3">สระว่างนำ้</h3>
                <p className="w-[36ch] text-center">
                    ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
                </p>
            </div>
        </div>
        <Image className="rounded-[40px] mb-4 w-[33%]" src={'/service-1.jpg'} width={400} height={500}></Image>
    </div>
  )
}

export default ServicesCarousel