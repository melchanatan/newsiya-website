"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import { cubicBezier } from "framer-motion"
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const RoomDetail = ({image}) => {
    const [showingOverlay, setShowingOverlay] = useState(false)

    const toggleOverlay = () => {
        console.log('toggleOverlay')
        setShowingOverlay(prev => !prev)
    }
  return (
    <>
        {
            !showingOverlay ?
        <>
            <div className="room_image">
            <Image className="room_image" src={image} width={400} height={400}>
            </Image>
            <div className="room_price room_price--right">
              <h1 className="text-accent-darken !tracking-tight">800 ฿</h1>
              <span className="text-accent-darken text-xl">/ คืน</span>
            </div>
            </div>
            <div className="room_info_container mb-4 md:mb-0">
              <h3 className="header-3">ห้องสวีท</h3>
              <div className="">
                <p className="mb-5 md:w-auto">
                  ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
                </p>
                <a onClick={(e) => {e.preventDefault(); toggleOverlay()}} className="link_button !font-maehongson !tracking-widest">เรียนรู้เพิ่มเติม</a>
              </div>
            </div>
        </> :
        <RoomDetailCard image={image} toggleOverlay={toggleOverlay}/>
        }
    </>
  )
}

export default RoomDetail


const RoomDetailCard = ({image, toggleOverlay}) => {
    const imageUrls = [
        '/hero-img.png',
        '/hero-img-2.jpg',
    ]

    const easing = cubicBezier(.86,.21,.03,1)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const swipeConfidenceThreshold = 10000;

    const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {

        if (newDirection < 0 && currentImageIndex == 0) {
            setCurrentImageIndex(imageUrls.length - 1);
            return;
        }
        else {
            setCurrentImageIndex(
                prev => (prev + 1*newDirection) % imageUrls.length
            );
        }

    };

    const variants = {
        enter: (direction) => {
            return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
            };
        }
    };
  return (
    <div className='col-span-full flex-col justify-center items-center'>
        <div className="relative h-[20rem] w-full">
            <motion.img
                className='rounded-[40px] object-cover h-[20rem] w-full'
                src={imageUrls[currentImageIndex]}
                variants={variants}
                key={currentImageIndex}
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    ease: easing,
                    duration: 2,
                    }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                    }
                }}
            />
            <button className='absolute right-[0] top-[0] p-3' onClick={() =>toggleOverlay()}>
                <IoIosClose className='w-[3rem] h-[3rem] fill-white rounded-full '/>
            </button>
            <button className='absolute left-[1rem] top-0 bottom-0' onClick={() => paginate(-1)}>
                <IoIosArrowBack className='circular_icon_button'/>
            </button>
            <button className='absolute right-[1rem] top-0 bottom-0' onClick={() => paginate(1)}>
                <IoIosArrowForward className='circular_icon_button'/>
            </button>
            <ul className='right-[50%] translate-x-[50%] bottom-[1.4rem] absolute flex gap-3'>
                {
                    imageUrls.map((imageUrl, index) =>
                        <IndexIndicator
                            isActive={index == currentImageIndex}
                            onClick={() => {
                                setCurrentImageIndex(index);
                            }}
                            key={index}
                        />
                    )
                }
            </ul>
        </div>
        <div className="flex flex-row gap-2 mt-4 [&>*]:flex-1 [&>*]:pr-2 [&>*:not(:last-child)]:border-r-2 border-accent-darken ">
            <div className="">
                <h1>ห้องสวีท</h1>
                <p>
                    ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
                </p>
            </div>
            <div className="">
                <h3 className='font-bold text-xl'>รายระเอียด</h3>
                <ul>
                    <li>ues</li>
                </ul>
            </div>
            <div className="">
                <h3 className='font-bold text-xl'>สิ่งอำนวยความสะดวก</h3>
                <ul>
                    <li>ues</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

const IndexIndicator = ({isActive, onClick}) => {
    return (
      <li 
          className={`w-5 h-5 bg-white rounded-full border-primary border-[2px] cursor-pointer hover:scale-125 transition-all duration-200`} 
          style={{
              backgroundColor: isActive ? '#FFFAF3' : 'transparent',
          }}
          onClick={onClick}
      ></li>
    )
  }
  