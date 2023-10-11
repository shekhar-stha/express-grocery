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
            <Head>
                <title>About Express Grocery Store | Indian Nepali Grocery Store Charlottesville</title>
                <meta name="description" content="Discover the story behind Express Grocery Store - your one-stop shop for quality Indian and Nepali groceries in Charlottesville." />
                <meta name="keywords" content="Indian grocery store, Nepali food, Charlottesville market, Local grocery shop, Cultural ingredients, Specialty store, Family-owned business, Ethnic products, Community-driven, Quality assurance"/>
            </Head>
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
