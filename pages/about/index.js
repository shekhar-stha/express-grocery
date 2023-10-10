import React from 'react'
import Navbar from '../../components/header/Navbar'
import AboutUs from '../../components/info/AboutUs'
import Footer from '../../components/info/Footer'
import Gallery from '../../components/info/Gallery'
import WhyUs from '../../components/info/WhyUs'
import Head from 'next/head'


export default function About() {
    return (
        <>
            <Head>
                <title>About Express Grocery Store | Indian Nepali Grocery Store Charlottesville</title>
                <meta name="description" content="Discover the story behind Express Grocery Store - your one-stop shop for quality Indian and Nepali groceries in Charlottesville." />
                <meta name="keywords" content="Indian grocery store, Nepali food, Charlottesville market, Local grocery shop, Cultural ingredients, Specialty store, Family-owned business, Ethnic products, Community-driven, Quality assurance
" />
            </Head>
            <Navbar />
            <div className='mt-5'>
                <AboutUs img="/img/store-indoor.JPG" />
            </div>
            <WhyUs />
            <Gallery />
            <Footer />
        </>
    )
}
