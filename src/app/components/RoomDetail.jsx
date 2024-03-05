"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cubicBezier } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { IoIosLink, IoIosWifi } from "react-icons/io";
import { IoIosFitness } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuTv2 } from "react-icons/lu";
import { BsSafe } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { TbSmokingNo } from "react-icons/tb";
import { RiSafeLine } from "react-icons/ri";

const easing = cubicBezier(0.86, 0.21, 0.03, 1);

const RoomDetail = ({ image, alignment }) => {
  const [showingOverlay, setShowingOverlay] = useState(false);

  const toggleOverlay = () => {
    console.log("toggleOverlay");
    setShowingOverlay((prev) => !prev);
  };

  const componentsOrder = [
    <RoomInfo toggleOverlay={toggleOverlay} alignment={alignment} />,
    <RoomImage image={image} toggleOverlay={toggleOverlay} />,
  ];

  return (
    <AnimatePresence>
      {!showingOverlay ? (
        <>
          {alignment == "right" ? componentsOrder : componentsOrder.reverse()}
        </>
      ) : (
        <RoomDetailCard image={image} toggleOverlay={toggleOverlay} />
      )}
    </AnimatePresence>
  );
};

export default RoomDetail;

const RoomInfo = ({ toggleOverlay, alignment }) => {
  return (
    <>
      <div
        className={`room_info_container mb-4 md:mb-0 ${
          alignment == "right" && "md:!items-end"
        }`}
      >
        <h3 className={`header-3`}>ห้องสวีท</h3>
        <p
          className={`mb-5 md:w-auto ${alignment == "right" && "md:text-end"}`}
        >
          ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย
          ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์
          ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์
          สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
        </p>
        <a
          onClick={(e) => {
            e.preventDefault();
            toggleOverlay();
          }}
          className={`link_button !font-maehongson !tracking-widest ${
            alignment == "right" && "md:ml-auto"
          }`}
        >
          เรียนรู้เพิ่มเติม
        </a>
      </div>
    </>
  );
};

const RoomImage = ({ image, toggleOverlay }) => {
  return (
    <motion.div
      className=" room_image group"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.75 }}
      transition={{
        ease: easing,
        duration: 0.6,
      }}
    >
      <Image
        className="room_image group-hover:brightness-75 transition-all"
        src={image}
        width={400}
        height={400}
        onClick={() => toggleOverlay()}
      ></Image>

      <button
        className="absolute left-[50%] translate-x-[-50%] top-0 bottom-0"
        onClick={() => toggleOverlay()}
      >
        <IoIosLink className="opacity-0 group-hover:opacity-100 circular_icon_button group-active:scale-50" />
      </button>
      <div className="room_price room_price--right">
        <h1 className="text-accent-darken !tracking-tight">800 ฿</h1>
        <span className="text-accent-darken text-xl">/ คืน</span>
      </div>
    </motion.div>
  );
};

const RoomDetailCard = ({ image, toggleOverlay }) => {
  const imageUrls = ["/hero-img.png", "/hero-img-2.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (newDirection < 0 && currentImageIndex == 0) {
      setCurrentImageIndex(imageUrls.length - 1);
      return;
    } else {
      setCurrentImageIndex(
        (prev) => (prev + 1 * newDirection) % imageUrls.length
      );
    }
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const details = [
    { icon: <MdOutlineOtherHouses />, name: "ขนาดห้อง: 28 ตารางเมตร" },
    { icon: <TbSmokingNo />, name: "ห้องปลอดบุหรี่" },
  ];

  const amenities = [
    { icon: <IoIosFitness />, name: "ฟิตเนส" },
    { icon: <TbAirConditioning />, name: "เครื่องปรับอากาศ" },
    { icon: <IoIosWifi />, name: "ฟรี Wi-Fi" },
    { icon: <LuTv2 />, name: "โทรทัศน์ดาวเทียม/เคเบิล" },
    { icon: <RiSafeLine />, name: "ตู้เซฟในห้องพัก" },
  ];

  return (
    <motion.div
      className="col-span-full flex-col justify-center items-center my-20"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.75 }}
      transition={{
        ease: easing,
        duration: 0.6,
      }}
    >
      <div className="relative h-[20rem] w-full">
        <motion.img
          className="rounded-[40px] object-cover h-[20rem] w-full"
          src={imageUrls[currentImageIndex]}
          variants={variants}
          key={currentImageIndex}
          initial={{ opacity: 0 }}
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
        <button
          className="absolute right-[0.75rem] top-[0.75rem] z-30"
          onClick={() => toggleOverlay()}
        >
          <IoIosClose className="w-[3rem] h-[3rem] fill-accent-darken shadow-lg rounded-full hover:bg-white/40 transition-all" />
        </button>
        <button
          className="absolute left-[1rem] top-0 bottom-0"
          onClick={() => paginate(-1)}
        >
          <IoIosArrowBack className="circular_icon_button" />
        </button>
        <button
          className="absolute right-[1rem] top-0 bottom-0"
          onClick={() => paginate(1)}
        >
          <IoIosArrowForward className="circular_icon_button" />
        </button>
        <ul className="right-[50%] translate-x-[50%] bottom-[1.4rem] absolute flex gap-3">
          {imageUrls.map((imageUrl, index) => (
            <IndexIndicator
              isActive={index == currentImageIndex}
              onClick={() => {
                setCurrentImageIndex(index);
              }}
              key={index}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-2 mt-4 [&>*]:flex-1 [&>*]:pr-2 [&>*:not(:last-child)]:border-r-2 border-accent-darken">
        <div className="">
          <h1>ห้องสวีท</h1>
          <p>
            ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย
            ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์
            ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์
            สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า
          </p>
        </div>
        <div className="">
          <h3 className="font-bold text-xl">รายระเอียด</h3>
          <ul className="flex flex-col gap-1 [&>*]:flex-row [&>*]:gap-2 [&>*]:flex [&>*]:items-center">
            {details.map((detail, index) => (
              <li key={index}>
                {detail.icon}
                <span>{detail.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-xl">สิ่งอำนวยความสะดวก</h3>
          <ul className="flex flex-col gap-1 [&>*]:flex-row [&>*]:gap-2 [&>*]:flex [&>*]:items-center">
            {amenities.map((amenity, index) => (
              <li key={index}>
                {amenity.icon}
                <span>{amenity.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const IndexIndicator = ({ isActive, onClick }) => {
  return (
    <li
      className={`w-5 h-5 bg-white rounded-full border-primary border-[2px] cursor-pointer hover:scale-125 transition-all duration-200`}
      style={{
        backgroundColor: isActive ? "#FFFAF3" : "transparent",
      }}
      onClick={onClick}
    ></li>
  );
};
