"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {enableScroll, disableScroll} from '../utils/disableScroll';


const Spashscreen = () => {
  return (
    <div className='flex justify-center items-center z-[101] top-0 left-0 w-full bg-primary h-screen overflow-hidden'>
      <Image src="/newsiya-logo.svg" className="w-[200px] h-[200px]" width={200} height={200} alt="newsiya-logo" priority={true}>

      </Image>
    </div>
  )
}

const WithSplashscreen = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // disableScroll();
    setTimeout(() => {
      setLoading(false);
    }, 20);

    return () => {
      // enableScroll();
    }
  }, []);

  
  return (
    loading ? <Spashscreen/> :
    <div>{children}</div>
  )
}

export default WithSplashscreen

