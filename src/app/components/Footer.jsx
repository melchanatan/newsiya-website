import React from 'react'
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-accent-darken flex gap-[4rem]  text-white py-[4rem] padding_page">
        <div>
            <h5>NEWSIYA HOTEL</h5>
            <p>Copyright &copy; 2022 Newsiya Hotel</p>
        </div>
        <div>
            <p className="w-[36ch]">
                ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
            </p>
        </div>
        <div className="ml-auto">
            <IoLogoFacebook className="w-[2rem] h-[2rem] icon_link" />
        </div>
    </footer>
  )
}

export default Footer