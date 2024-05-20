"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Reorder, AnimatePresence, motion } from "framer-motion";

const ServicesCarousel = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 639) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth < 639) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const [items, setItems] = useState([0, 1, 2]);

  const infos = [
    {
      image: "/service-1.jpg",
      title: "สระว่างน้ำ 1",
      description:
        "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า",
    },
    {
      image: "/service-1.jpg",
      title: "สระว่างน้ำ 2",
      description:
        "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า",
    },
    {
      image: "/service-1.jpg",
      title: "สระว่างน้ำ 3",
      description:
        "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย ตุ๊กตุ๊กศากยบุตรหน่อมแน้ม เฮียไวอากร้าพาร์ทเนอร์ ฮวงจุ้ยบาร์บี้อุรังคธาตุ มิวสิคกุมภาพันธ์ไฮไลต์ สตริงสามแยกแครอทกระดี๊กระด๊ากระดี๊กระด๊า",
    },
  ];

  const swapToCenter = (item) => {
    setItems((prev) => {
      prev = prev.filter((e) => e !== item);
      prev.splice(1, 0, item);
      console.log(prev);
      return prev;
    });
  };

  const handleReorder = (newOrder) => {
    setItems(newOrder);
  };

  return (
    <Reorder.Group
      axis={isMobile ? "y" : "x"}
      values={items}
      onReorder={handleReorder}
      className="flex flex-col md:flex-row md:items-center md:justify-center gap-[5vw] md:w-[130vw] md:max-w-auto"
    >
      {items.map((item, index) => (
        <Reorder.Item
          dragListener={isMobile ? false : true}
          className={`pointer-none select-none mb-4 ${
            1 === index ? "w-[50%]" : "w-full"
          } md:w-[33%] flex md:flex-col`}
          key={"service-" + item}
          value={item}
        >
          <ServicesCarouselCard
            onClick={() => swapToCenter(item)}
            info={infos[item]}
            isSelected={1 === index}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default ServicesCarousel;

const ServicesCarouselCard = ({ info, isSelected, onClick }) => {
  return (
    <AnimatePresence className={``}>
      <Image
        onClick={onClick}
        draggable={false}
        alt="service image"
        className={`rounded-[40px] md:mb-4 w-full h-[150px] md:h-[250px] object-cover hover:border-[10px] hover:${
          !isSelected
            ? " max-w-[90%] ml-auto mr-auto"
            : " translate-x-[-4rem] w-[20rem] md:w-auto"
        } hover:border-primary-darken transition-all md:translate-x-0 `}
        src={info.image}
        width={400}
        height={500}
      ></Image>
      {isSelected && (
        <motion.div
          className="md:text-center md:items-center flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="header-3 translate-x-[-3rem] md:translate-x-0">
            {info.title}
          </h3>
          <p className="w-[23ch] sm:w-[25ch] md:w-[36ch] xl:w-[80%] md:text-center translate-x-[-3rem] md:translate-x-0">
            {info.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
