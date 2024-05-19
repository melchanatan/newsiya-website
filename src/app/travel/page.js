import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <section id="travel" className="bg-primary mt-[7rem] align-center justify-center flex flex-col items-center">
            <h1 className="mb-5 heading">Places to visit</h1>
            <Image className="rounded-full border-primary border-[3px]" src='/avatar-2.jpg' width={400} height={400} alt='near by travel location'></Image>
        </section>
    )
}

export default page