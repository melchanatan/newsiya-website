import React from 'react'
import { getContentPricing } from '@/utils/contentful'
import formatContentfulImages from '@/utils/formatContentfulImage'
import PricingImages from '@/components/PricingImages'
const page = async () => {

    const {
        images
    } = await getContentPricing()

    const formattedImage = formatContentfulImages(images)

    return (
        <section id="pricing" className="bg-primary align-center justify-center flex flex-col items-center">
            <PricingImages images={formattedImage} />
        </section>
    )
}

export default page