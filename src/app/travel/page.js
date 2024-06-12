"use client"
import React from 'react'
import Image from 'next/image'

import LightGallery from 'lightgallery/react';
import { FaExpandAlt } from "react-icons/fa";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const page = () => {
    const images = [
        {
            src: '/avatar-1.jpg',
            thumbnail: '/avatar-1.jpg',
        },
        {
            src: '/avatar-2.jpg',
            thumbnail: '/avatar-2.jpg',
        },
    ]

    return (
        <div className="my-10 min-h-[60vh]">
        <LightGallery
            elementClassNames='flex gap-3 flex-wrap padding_page'
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            {
                images.map((image, index) => (
                    <a key={index} href={image.src} className='relative'>
                        <div className='group [&>*]:transition-all [&>*]:duration-300'>
                            <span className='w-full h-full top-0 left-0 absolute bg-black opacity-0 group-hover:opacity-30 '></span>
                            <span className='p-6 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'><FaExpandAlt className='w-6 h-6'/></span>
                        </div>
                        <img alt="img1" src={image.thumbnail} />
                    </a>
                ))
            }
        </LightGallery>
    </div>
    )
}


export default page