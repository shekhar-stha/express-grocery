import Head from 'next/head';
import Navbar from '../components/header/Navbar';
import ProductCategories from '../components/products/ProductCategories';
import WhyUs from '../components/info/WhyUs';
import CallNow from '../components/buttons/CallNow';
import ProductSlider from '../components/products/ProductSlider';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Faq from '../components/info/Faq';
import Testimonials from '../components/info/Testimonials';
import Footer from '../components/info/Footer';
// import products from '../json/products';
import Hero from '../components/info/Hero';
import Gallery from '../components/info/Gallery';
import AboutUs from '../components/info/AboutUs';
import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
    <h1>Error loading data</h1>
  </section>;
  if (!data) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </section>;

  const products = JSON.parse(data);
  console.log("Products" + products)


  const spices = products.filter((product) => product.genre === 'Spices');
  const snacks = products.filter((product) => product.genre === 'Snacks');
  return (
    <div>
      <Head>
        <title>Express Grocery Store | Indian Nepali Grocery Store</title>
        <meta name="description" content="Explore a diverse range of Indian and Nepali groceries at Express Grocery Store in Charlottesville. Enjoy free delivery over $40" />
        <meta name="keywords" content="Indian groceries, Nepali groceries, Express Grocery Store, 
        Best Indian Grocery, Grocery Store Charlottesville" />
      </Head>

      <main>
        <section className='nav-hero home'>
          <Navbar />
          <Hero />
          <Image className="bg-img" width={1400} height={100} src="/img/gallery-2.JPG" alt="Store BG Image" />
        </section>
        <ProductCategories />
        <WhyUs />
        <ProductSlider headerClass="text-start" containerName="All Products" products={products} />
        <AboutUs img="/img/store-indoor.jpg" />
        <ProductSlider headerClass="text-start" containerName="Snacks" products={snacks} />
        <ProductSlider headerClass="text-start" containerName="Spices" products={spices} />
        <Testimonials />
        <Gallery />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const data = await fetcher('/api/staticdata');
//   const products = JSON.parse(data);

//   return {
//     props: {
//       products,
//     },
//     revalidate: 60,
//   };
// }