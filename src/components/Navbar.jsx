"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { motion, useScroll } from "framer-motion"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence } from 'framer-motion';
import BookNow from './BookNow';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [showingMobileNav, setShowingMobileNav] = useState(false)

  const toggleMobileNav = (event) => {
    if (event.target.classList.contains("nav_dropdown_item")) {
      return;
    }
    setShowingMobileNav(prev => !prev)
  }

  useState(() => {
    scrollYProgress.onChange((latest) => {

      if (latest > 0.04) {
        document.querySelector("#navbar").classList.add("nav_scrolled");
      } else {
        document.querySelector("#navbar").classList.remove("nav_scrolled");
      }
    });
  }, []);

  return (
    <>
      <nav
        id='navbar'
        whileInView={{ opacity: [0, 1] }} initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center absolute w-full z-40"
      >
        <div className="relative w-full bg-primary-darken py-5 flex justify-center items-center shadow-lg">
          <a href="" className='inline-flex text-white flex-row justify-center items-center gap-4 text-xl'>
            <Image src="/newsiya-logo.svg" alt="Vercel Logo" width={48} height={16} />
            <div>
              <h4 className=' font-outfit'>Newsiya Hotel</h4>
              <p>โรงเเรมนิว สิยะ</p>
            </div>
            <div className='absolute right-[10vw]'>
              <BookNow />
            </div>
          </a>
        </div>
        <ul className="flex justify-center gap-[3vw] uppercase items-center w-[80%] bg-accent-darken translate-y-[-10px] rounded-xl">
          <li className="nav_item"><a href="/">หน้าเเรก</a></li>
          <li className="nav_item"><a href="/about">เกี่ยวกับนิว สิยะ</a></li>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="nav_item">บริการอื่นๆ<IoIosArrowDown /></div>
            <ul tabIndex={0} className="nav_dropdown">
              <li><a href='/service'>สิ่งอำนวยความสะดวก</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="nav_item">ธุระกิจในเครือ<IoIosArrowDown /></div>
            <ul tabIndex={0} className="nav_dropdown">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <li className="nav_item"><a href="/travel">สถานที่ท่องเที่ยว</a></li>
          <li className="nav_item"><a href="/pricing">ราคาที่พัก</a></li>
          <li className="nav_item"><a href="/contact">ติดต่อ</a></li>

          <button className="p-2 group md:hidden" onClick={toggleMobileNav}>
            <RiMenu3Fill className="w-8 h-8 group-active:scale-125" />
          </button>
        </ul>
      </nav>

    </>

  )
}

export default Navbar