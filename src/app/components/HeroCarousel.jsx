"use client"
import React, {useState} from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"

const HeroCarousel = () => {
    const imageUrls = [
        '/hero-img.png',
        '/hero-img-2.jpg',
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        if (newDirection < 0 && currentImageIndex == 0) {
            setCurrentImageIndex(imageUrls.length - 1);
            return;
        }
        else {
            setCurrentImageIndex(
                prev => (prev + 1*newDirection) % imageUrls.length
            );
        }

    };

    const variants = {
        enter: (direction) => {
            return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
            };
        }
    };

    return (
        <AnimatePresence initial={false} >
            <div className="overflow-hidden w-full h-[70vh] max-h-[60rem] bg-no-repeat bg-center aspect-auto  bg-cover rounded-b-[8vw] border-primary-darken border-b-[10px] relative z-0 bg-primary-darken">
                <motion.img
                    className='w-full h-full object-cover'
                    src={imageUrls[currentImageIndex]}
                    variants={variants}
                    key={currentImageIndex}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        ease: "linear",
                        duration: 1,
                      }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                        }
                    }}
                />
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
        </AnimatePresence>

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
