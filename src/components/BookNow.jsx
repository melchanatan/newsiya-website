import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoFishOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const BookNow = ({isNav}) => {
  return (
    <>
      <div className={`${isNav ? "mobile-nav_cta mt-[6vh]" : "link_button link_button--transparent"} !font-normal relative group z-[41]`}>
        Book Now
        <ul id="mobile-nav_cta" className={`${isNav ? "z-[100] top-0 right-0 left-0 text-2xl" : "top-0 right-0 w-[170px]"} scale-110 group-hover:flex hidden absolute bg-white p-2 rounded-xl text-accent-darken font-maehongson flex-col`}>
          <li className='nav_dropdown_item'><IoCallOutline/>Phone</li>
          <li className='nav_dropdown_item'><IoFishOutline />Line Offical</li>
        </ul>
      </div>
      
    </>
  )
}

export default BookNow