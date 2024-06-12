import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <section id="pricing" className="bg-primary align-center justify-center flex flex-col items-center">
            <Image
                className="rounded-[50px] border-primary border-[3px] h-[30vh]" src='/hero-img.png'
                width={400}
                height={400}
                style={{objectFit:"cover"}}
                alt='near by travel location'
            ></Image>
            <table>
                <tr>
                    <th>ประเภท</th>
                    <th>ประเภท</th>
                    <th>ประเภท</th>
                </tr>
                <tr>
                    <td>100px</td>
                </tr>
            </table>
        </section>
    )
}

export default page