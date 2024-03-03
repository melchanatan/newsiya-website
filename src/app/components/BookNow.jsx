import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoFishOutline } from "react-icons/io5";

const BookNow = () => {
  const [showingDropdown, setShowingDropdown] = useState(false);
  return (
    <>
      <p onClick={() => setShowingDropdown(!showingDropdown)} className="link_button relative group">
        Book Now
        <ul className="scale-110 group-hover:flex hidden absolute bg-white top-0 right-0 w-[170px] p-2 rounded-xl text-accent-darken font-maehongson flex-col ">
          <li className='nav_dropdown_item'><IoCallOutline/>Phone</li>
          <li className='nav_dropdown_item'><IoFishOutline />Line Offical</li>
        </ul>
      </p>
      
    </>
  )
}

export default BookNow