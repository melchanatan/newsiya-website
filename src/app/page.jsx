import React from 'react'
import Image from "next/image";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroCarousel from "../components/HeroCarousel";
import ReviewsSlider from "../components/ReviewsSlider";
import Carousel from "../components/Carousel";
import { title } from 'process';
import { format, parse } from 'path';
import formatContentfulImage from '@/utils/formatContentfulImage';
import {getContentHero} from '@/utils/contentful';

const Page = async () => {
  const {
    images,
    title,
    subtitle,
    agodaReviewsCount,
    agodaRating,
    reviews,
    promotionImages
  } = await getContentHero();

  const formattedImages = formatContentfulImage(images);
  const formattedPromotionImages = formatContentfulImage(promotionImages);

  return (
    <div>
      <main className="bg-primary h-[100vh] rounded-b-[4rem] flex flex-col">
        <HeroCarousel images={formattedImages} />
        <header className="padding_page flex md:items-center md:justify-between flex-1 flex-col md:flex-row items-start justify-center">
          <div className="mb-3 md:mb-0">
            <h1 className="!text-hero-clamp text-accent-darken ">
              {title}
            </h1>
            <h1 className="max-w-[28ch] !text-hero-clamp  text-primary-darken">{subtitle}</h1>
          </div>
          <div className="flex gap-[4vw] justify-center items-start">
            <div className="order-2 md:order-1">
              <span className="flex items-center justify-between min-h-[48px]">
                <h1 className="text-accent-darken">{parseFloat(agodaRating).toFixed(1)}</h1>
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

                <h1 className="text-accent-darken">{agodaReviewsCount}+</h1>
              </span>
              <div className="flex items-center">
                <p className="text-xl">รีวิวจากผู้เข้าพัก</p>
                <IoIosArrowRoundForward className="w-[2.4rem] h-[2.4rem] stroke-accent-darken" />
              </div>
            </div>
          </div>
        </header>
      </main>
      <section id="reviews" className="bg-white pb-20 !pr-0 ">
        <h1 className="heading mb-5 padding_page">Reviews</h1>
        <ReviewsSlider reviews={reviews}/>
      </section>
      {
        formattedPromotionImages.length > 0 &&
        <Carousel images={formattedPromotionImages} />
      }

    </div>
  )
}

export default Page;
