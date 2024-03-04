"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { motion, useScroll } from "framer-motion"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence } from 'framer-motion';
import BookNow from './BookNow';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [showingMobileNav, setShowingMobileNav] = useState(false)

  const toggleMobileNav = (event) => {
    if (event.target.classList.contains("nav_dropdown_item")) {
      return;
    }
    setShowingMobileNav( prev => !prev)
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

  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   if (html) {
  //     html.style.overflow = showingMobileNav ? "hidden" : "auto";
  //   }
  // }, [showingMobileNav]);
  
  return (
    <>
      <motion.nav id='navbar' whileInView={{ opacity: [0, 1] }} initial={{ opacity: 0 }} transition={{ duration: 0.5 }} className="flex items-center absolute padding_page py-5 w-full bg-gradient-to-b from-white/80 to-transparent from-10% z-40">
          <a href="">
            <Image src="/newsiya-logo.svg" alt="Vercel Logo" width={48} height={16} />
          </a>
          
          <ul className="flex gap-[5vw] ml-auto uppercase items-center ">
              <li className="nav_item"><a href="#rooms">Rooms</a></li>
              <li className="nav_item"><a href="#services">Services</a></li>
              <li className="nav_item"><a href="#contacts">Contacts</a></li>
              <li className="nav_item"><a href="">Gallery</a></li>
              <BookNow/>
              <button className="p-2 group md:hidden" onClick={toggleMobileNav}>
                <RiMenu3Fill className="w-8 h-8 group-active:scale-125"/>
              </button>
          </ul>
      </motion.nav>
      <AnimatePresence>
        {
          showingMobileNav &&
        
          <motion.div 
            className="sticky w-full h-[100vh] bg-primary 0 top-0 right-0 z-50 flex justify-center items-center flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => toggleMobileNav(e)}
          >
            <button className="absolute top-5 right-5 group">
              <IoMdClose className="w-[3rem] h-[3rem] group-active:scale-110 group-active:rotate-[270deg] transition-all duration-300" />
            </button>
            <ul className="flex gap-[1.6vh] uppercase items-center flex-col ">
                <li className="mobile-nav_item"><a href="#rooms">Rooms</a></li>
                <li className="mobile-nav_item"><a href="#services">Services</a></li>
                <li className="mobile-nav_item"><a href="#contacts">Contacts</a></li>
                <li className="mobile-nav_item"><a href="">Gallery</a></li>
            </ul>
            <BookNow isNav={true}/>
          </motion.div>
            }
      </AnimatePresence>
    </>
    
  )
}

export default Navbar