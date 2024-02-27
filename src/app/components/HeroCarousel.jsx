"use client"
import React, {useState} from 'react'
import Image from "next/image";

const HeroCarousel = () => {
    const imageUrls = [
        '/hero-img.png',
        '/hero-img-2.jpg',
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    
    return (
        <div className="overflow-hidden w-full h-[70vh] max-h-[60rem] bg-no-repeat bg-center aspect-auto  bg-cover rounded-b-[8vw] border-primary-darken border-b-[10px] relative z-0">
            <Image src={imageUrls[currentImageIndex]} alt='' className='w-full h-full object-cover' width={1920} height={1080}></Image>

            <ul className='right-[8vw] bottom-[1.4rem] absolute flex gap-3'>
                {
                    imageUrls.map((imageUrl, index) => 
                        <IndexIndicator 
                            isActive={index == currentImageIndex}
                            onClick={() => setCurrentImageIndex(index)}
                            key={index}
                        />
                    )
                }
                
            </ul>
        </div>
    )
}

export default HeroCarousel


const IndexIndicator = ({isActive, onClick}) => {
  return (
    <li 
        className={`w-5 h-5 bg-white rounded-full border-primary border-[2px] cursor-pointer hover:scale-125 transition-all duration-200`} 
        style={{
            backgroundColor: isActive ? '#FFFAF3' : 'transparent',
        }}
        onClick={onClick}
    ></li>
  )
}
