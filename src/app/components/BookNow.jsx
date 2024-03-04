import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoFishOutline } from "react-icons/io5";

const BookNow = ({isNav}) => {
  return (
    <>
      <p className={`${isNav ? "mobile-nav_cta mt-[6vh]" : "link_button"} relative group`}>
        Book Now
        <ul className={`${isNav ? "top-0 right-0 left-0 text-2xl" : "top-0 right-0 w-[170px]"} scale-110 group-hover:flex hidden absolute bg-white  p-2 rounded-xl text-accent-darken font-maehongson flex-col`}>
          <li className='nav_dropdown_item'><IoCallOutline/>Phone</li>
          <li className='nav_dropdown_item'><IoFishOutline />Line Offical</li>
        </ul>
      </p>
      
    </>
  )
}

export default BookNow