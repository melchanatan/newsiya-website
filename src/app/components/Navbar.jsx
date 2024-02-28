"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { motion, useScroll } from "framer-motion"

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  useState(() => {
    scrollYProgress.onChange((latest) => {
      console.log(latest);
      if (latest > 0.14) {
        document.querySelector("nav").classList.add("nav_scrolled");
      } else {
        document.querySelector("nav").classList.remove("nav_scrolled");
      }
    });
  }, []);

  return (
    <motion.nav whileInView={{ opacity: [0, 1] }} initial={{ opacity: 0 }} transition={{ duration: 0.5 }} className="flex items-center absolute padding_page py-5 w-full bg-gradient-to-b from-white/60 to-transparent from-10% z-40">
        <a href="">
          <Image src="/newsiya-logo.svg" alt="Vercel Logo" width={48} height={16} />
        </a>
        
        <ul className="flex gap-[5vw] ml-auto uppercase items-center">
            <li className="nav_item">Rooms</li>
            <li className="nav_item">Services</li>
            <li className="nav_item">Contacts</li>
            <li className="nav_item">Gallery</li>
            <a href="" className="link_button">Book Now</a>
        </ul>
    </motion.nav>
  )
}

export default Navbar