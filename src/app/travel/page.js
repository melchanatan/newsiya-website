import React from 'react'
import Gallery from '@/components/Gallery'

import { getContentTravel } from '@/utils/contentful';
import formatContentfulImages from '@/utils/formatContentfulImage';

const page = async () => {
    const {
        images
    } = await getContentTravel()

    const formattedImage = formatContentfulImages(images)

    return (
        <div className="my-10 min-h-[60vh]">
            <Gallery images={formattedImage}/>
        </div>
    )
}


export default page