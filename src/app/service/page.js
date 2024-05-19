import React from 'react'
import ServicesCarousel from "../../components/ServicesCarousel";

const page = () => {
    return (
        <section id="services" className="bg-primary mt-20 align-center justify-center flex flex-col items-center">
            <h1 className="mb-5 heading">Services</h1>
            <ServicesCarousel />
        </section>
    )
}

export default page