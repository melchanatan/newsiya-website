"use client"
import React from 'react'
import Image from 'next/image'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const page = () => {
    return (
        <div className="App">
        <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <a href="/avatar-1.jpg">
                <img alt="img1" src="/avatar-1.jpg" />
            </a>
            <a href="/avatar-2.jpg">
                <img alt="img2" src="/avatar-2.jpg" />
            </a>
            ...
        </LightGallery>
    </div>
    )
}


export default page