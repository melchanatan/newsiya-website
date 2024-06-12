import React from 'react'
import Image from 'next/image'
import { getContentAbout } from '@/utils/contentful'
import { formatContentfulImage } from '@/utils/formatContentfulImage'
const page = async () => {
  const {
    image,
    text
  } = await getContentAbout()

  const formattedImage = formatContentfulImage(image);
  return (
    <section id="travel" className="bg-primary align-center justify-center flex flex-row gap-[3vw] items-center">
      <Image
        className="rounded-[50px] border-primary border-[3px] h-[50vh]" 
        src={formattedImage.src}
        width={500}
        height={400}
        style={{ objectFit: "cover" }}
        alt={formattedImage.alt}
      ></Image>
      <div>
        <h1 className="heading mb-5">About Us</h1>
        <p className='w-[36ch]'>
         {text}
        </p>
      </div>
    </section>
  )
}

export default page