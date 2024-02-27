import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center absolute padding_page py-5 w-full bg-gradient-to-b from-white/60 to-transparent from-10% z-40">
        <a href="">
          <Image src="/newsiya-logo.svg" alt="Vercel Logo" width={48} height={16} />
        </a>
        
        <ul className="flex gap-[5vw] ml-auto uppercase items-centerv ">
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