import React from 'react'
import ServicesCarousel from "../../components/ServicesCarousel";
import { getContentServices } from '@/utils/contentful';
import formatContentfulImages from '@/utils/formatContentfulImage';

const page = async () => {
    const {
        serviceImages
    } = await getContentServices()

    const formattedServiceImages = formatContentfulImages(serviceImages)

    return (
        <section id="services" className="bg-primary align-center justify-center flex flex-col items-center">
            <h1 className="mb-5 heading">Services</h1>
            <ServicesCarousel infos={formattedServiceImages}/>
        </section>
    )
}

export default page