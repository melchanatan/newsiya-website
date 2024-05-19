import React from 'react'
import Home from './pages/Home'
import WithSplashscreen from '../components/WithSplashscreen'
import Image from "next/image";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroCarousel from "../components/HeroCarousel";
const Page = () => {
  return (
    <div>
      <WithSplashscreen>
        <main className="bg-primary h-[100vh] rounded-b-[4rem] flex flex-col">
          <HeroCarousel />
          <header className="padding_page flex md:items-center md:justify-between flex-1 flex-col md:flex-row items-start justify-center">
            <div className="mb-3 md:mb-0">
              <h1 className="!text-hero-clamp text-accent-darken ">NEWSILA HOTEL</h1>
              <h1 className="!text-hero-clamp  text-primary-darken">ในการเดินทางธุรกิจของคุณ </h1>
            </div>
            <div className="flex gap-[4vw] justify-center items-start">
              <div className="order-2 md:order-1">
                <span className="flex items-center justify-between min-h-[48px]">
                  <h1 className="text-accent-darken">7.0</h1>
                  <IoMdStarOutline className="min-h-[1.5rem] min-w-[1.5rem] w-[4.6vw] h-[4.6vw] max-h-[4rem] max-w-[4rem] text-accent-darken" />
                </span>
                <p className="text-xl mt-[4px]">จาก agoda</p>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center">
                  <ul className="flex">
                    <Image className="rounded-full border-primary border-[3px]" src='/avatar-2.jpg' width={48} height={48} alt='avatar'></Image>
                    <Image className="rounded-full border-primary border-[3px] ml-[-20px]" src='/avatar-1.jpg' width={48} height={48} alt='avatar'></Image>
                  </ul>

                  <h1 className="text-accent-darken">34+</h1>
                </span>
                <div className="flex items-center">
                  <p className="text-xl">รีวิวจากผู้เข้าพัก</p>
                  <IoIosArrowRoundForward className="w-[2.4rem] h-[2.4rem] stroke-accent-darken" />
                </div>
              </div>
            </div>
          </header>
        </main>
      </WithSplashscreen>
    </div>
  )
}

export default Page