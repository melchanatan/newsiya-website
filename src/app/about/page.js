import React from 'react'
import Image from 'next/image'

const page = async () => {
  return (
    <section id="travel" className="bg-primary mt-[7rem] align-center justify-center flex flex-row gap-[3vw] items-center">
      <Image
        className="rounded-[50px] border-primary border-[3px] h-[50vh]" src='/hero-img.png'
        width={500}
        height={400}
        style={{ objectFit: "cover" }}
        alt='near by travel location'
      ></Image>
      <div>
        <h1 className="heading mb-5">About Us</h1>
        <p className='w-[36ch]'>
          ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊าไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
        </p>
      </div>
    </section>
  )
}

export default page