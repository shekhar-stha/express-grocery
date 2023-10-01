import Head from 'next/head';
import Navbar from '../components/header/navbar';
import ProductCategories from '../components/products/productCategories';
import WhyUs from '../components/info/whyUs';
import CallNow from '../components/buttons/callNow';
import ProductSlider from '../components/products/productSlider';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Faq from '../components/info/faq';
import Testimonials from '../components/info/testimonials';
import Footer from '../components/info/footer';
// import products from '../json/products';
import Hero from '../components/info/hero';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const products = JSON.parse(data);
  console.log("Products" + products)

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='nav-hero home'>
          <Navbar />
          <Hero />
        </section>
        <ProductCategories />
        <WhyUs />
        <ProductSlider containerName="All Products" products={products} />
        <Testimonials />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
