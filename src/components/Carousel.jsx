"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import { cubicBezier } from "framer-motion"
import InteractiveOverlay from './InteractiveOverlay';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HeroCarousel = ({ images }) => {

    const easing = cubicBezier(.86, .21, .03, 1)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    var [intervalStop, setIntervalStop] = useState(false);

    const swipeConfidenceThreshold = 10000;

    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection, fromUser = true) => {
        if (fromUser) {
            intervalStop = true;
        }

        if (newDirection < 0 && currentImageIndex == 0) {
            setCurrentImageIndex(images.length - 1);
            return;
        }
        else {
            setCurrentImageIndex(
                prev => (prev + 1 * newDirection) % images.length
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
            <div className="relative overflow-hidden w-full h-[520px] bg-no-repeat bg-center aspect-auto bg-cover z-0 bg-primary-darken">
                {images.length > 1 && 
                <>
                    <div
                        className={`transition-all hover:scale-110 active:brightness-75 top-[50%] absolute -translate-y-1/2 left-[4vw] p-6 duration-100 flex justify-center items-center rounded-full bg-white shadow-xl z-[10] cursor-pointer`}
                        onClick={() => {
                            paginate(-1);
                        }}
                    >
                        <IoIosArrowBack className='w-10 h-10 stroke-accent-darken' />
                    </div>
                    <div
                        className={`transition-all hover:scale-110 active:brightness-75 top-[50%] absolute -translate-y-1/2 right-[4vw] p-6 duration-100 flex justify-center items-center rounded-full bg-white shadow-xl z-[10] cursor-pointer`}
                        onClick={() => {
                            paginate(1);
                        }}
                    >
                        <IoIosArrowForward className='w-10 h-10 stroke-accent-darken' />
                    </div>
                </>
                }
                <motion.img
                    className='w-full h-full object-cover'
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    variants={variants}
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
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

                <ul className='right-[8vw] bottom-[1.4rem] absolute flex gap-3'>

                    {
                        images.map((imageUrl, index) =>
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


const IndexIndicator = ({ isActive, onClick }) => {
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
