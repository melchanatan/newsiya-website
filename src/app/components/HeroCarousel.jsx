"use client"
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import { cubicBezier } from "framer-motion"
import InteractiveOverlay from './InteractiveOverlay';

const HeroCarousel = () => {
    const imageUrls = [
        '/hero-img.png',
        '/hero-img-2.jpg',
    ]
    const easing = cubicBezier(.86,.21,.03,1)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    var [intervalStop, setIntervalStop] = useState(false);
    
    const swipeConfidenceThreshold = 10000;

    const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection, fromUser=true) => {
        if (fromUser) {
            intervalStop = true;
        }

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

    useEffect(() => {
        if (intervalStop) {
            clearTimeout(startTimer);
            setIntervalStop(false);
            return;
        } 

        var startTimer = setInterval(() => {
            console.log(intervalStop);

            paginate(1, false);
        }, 4000);

        return () => {
            clearInterval(startTimer);
        }
    }, [intervalStop])

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
                        ease: easing,
                        duration: 2,
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
                <InteractiveOverlay 
                    className={`absolute top-0 left-0 w-full h-full`} 
                    handleClickLeft={() => paginate(-1)} 
                    handleClickRight={() => paginate(1)}
                />

                <ul className='right-[8vw] bottom-[1.4rem] absolute flex gap-3'>
                    {
                        imageUrls.map((imageUrl, index) => 
                            <IndexIndicator 
                                isActive={index == currentImageIndex}
                                onClick={() => {
                                    setCurrentImageIndex(index);
                                    setIntervalStop(true);
                                }}
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
