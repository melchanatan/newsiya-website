"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import BookNow from "./BookNow";
import { IoIosArrowDown } from "react-icons/io";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const navContents = [
    {
      link: "หน้าเเรก",
      href: "/",
    },
    {
      link: "เกี่ยวกับนิวศิญา",
      href: "/about",
    },
    {
      linksTitle: "บริการอื่นๆ",
      links: [
        {
          link: "สิ่งอำนวยความสะดวก",
          href: "/service",
        },
      ],
    },
    {
      linksTitle: "ธุระกิจในเครือ",
      links: [
        {
          link: "Item 1",
          href: "/",
        },
        {
          link: "Item 2",
          href: "/",
        },
      ],
    },
    {
      link: "สถานที่ท่องเที่ยว",
      href: "/travel",
    },
    {
      link: "ราคาที่พัก",
      href: "/pricing",
    },
    {
      link: "ติดต่อ",
      href: "/contact",
    },
  ];

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
    <nav
      id="navbar"
      whileInView={{ opacity: [0, 1] }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center absolute w-full z-40"
      style={{
        position: pathname == "/" ? "absolute" : "sticky",
      }}
    >
      <div className="relative w-screen bg-primary-darken py-5 flex md:justify-center items-center shadow-lg justify-between px-[5vw]">
        <a
          href=""
          className="inline-flex text-white flex-row justify-center items-center gap-4 text-xl"
        >
          <Image
            src="/newsiya-logo.svg"
            alt="Vercel Logo"
            width={48}
            height={16}
          />
          <div>
            <h4 className=" font-outfit">Newsiya Hotel</h4>
            <p className="hidden md:inline">โรงเเรมนิว สิยะ</p>
          </div>
        </a>
        <MobileNavbar navContents={navContents} />
        <div className="absolute right-[10vw] md:inline hidden">
          <BookNow />
        </div>
      </div>
      <ul className="flex justify-between uppercase items-center lg:px-[10%] px-[4%] lg:w-[80%] w-[98%] bg-accent-darken translate-y-[-10px] rounded-xl">
        {navContents.map((item, index) => {
          console.log(item);
          if (item.link)
            return (
              <li key={index} className="nav_item">
                <a href={item.href}>{item.link}</a>
              </li>
            );

          if (item.linksTitle)
            return (
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="nav_item">
                  {item.linksTitle}
                  <IoIosArrowDown />
                </div>
                <ul tabIndex={0} className="nav_dropdown">
                  {item.links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.href}>{item.link}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
        })}
      </ul>
    </nav>
  );
};

const MobileNavbar = ({ navContents = [] }) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost ml-auto p-2 group md:hidden"
      >
        <RiMenu3Fill className="w-8 h-8 group-active:scale-125 text-white" />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg menu-vertical dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}

        {navContents.map((item, index) => {
          if (item.link)
            return (
              <li key={index}>
                <a href={item.href}>{item.link}</a>
              </li>
            );

          if (item.linksTitle)
            return (
              <li>
                <a>{item.linksTitle}</a>
                <ul className="p-2">
                  {item.links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.href}>{item.link}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
