import React from 'react'
import Navbar from '../../components/header/navbar'
import Footer from '../../components/info/footer'
import AboutUs from '../../components/info/aboutUs'
import WhyUs from '../../components/info/whyUs'
import ContactForm from '../../components/form/contactForm'
import Gallery from '../../components/info/gallery'

export default function About() {
    return (
        <>
            <Navbar />
            <div className='mt-5'>
                <AboutUs img="/img/prashanna.jpg" />
            </div>
            <WhyUs />
            <Gallery />
            <Footer />
        </>
    )
}
