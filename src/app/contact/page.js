import React from 'react'
import MyMap from "../../components/MyMap";

const page = () => {
    return (
        <section id="maps" className="padding_page h-[calc(80vh-100px)] flex flex-col justify-center items-center sm:flex-row gap-[5vw] bg-primary !py-0">
            <MyMap className="w-full sm:w-[60vw] h-[400px] lg:w-[50vw]" />
            <div className="mt-[4vh] sm:w-[30vw] order-[-1] sm:order-[2] padding_page sm:px-0">
                <h1 className="heading mb-5">Contacts</h1>
                <p className="w-[95%] md:w-[36ch]">
                    ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
                </p>
            </div>
        </section>
    )
}

export default page