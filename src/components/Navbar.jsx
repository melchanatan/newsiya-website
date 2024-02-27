import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center absolute px-4 md:px-[10vw] py-2 w-full bg-gradient-to-b from-white/60 to-transparent from-10%">
        <a href="">
          <Image src="/newsiya-logo.svg" alt="Vercel Logo" width={40} height={16} />
        </a>
        
        <ul className="flex gap-[5vw] ml-auto uppercase items-center">
            <li className="nav_item">Rooms</li>
            <li className="nav_item">Services</li>
            <li className="nav_item">Contacts</li>
            <li className="nav_item">Gallery</li>
            <a href="" className="link_button">Book Now</a>
        </ul>
    </nav>
  )
}

export default Navbar