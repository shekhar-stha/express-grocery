import React from 'react'
import Navbar from '../../components/header/navbar'
import ProductCategories from '../../components/products/productCategories'
import useSWR from 'swr';
import ProductSlider from '../../components/products/productSlider';
import Footer from '../../components/info/footer';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Grocery() {
    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;
  
    const products = JSON.parse(data);
    console.log("Products" + products)
  
  
    const spices = products.filter((product) => product.genre === 'Spices');
    const snacks = products.filter((product) => product.genre === 'Snacks');
    const beverages = products.filter((product) => product.genre === 'Beverages');
    const grains = products.filter((product) => product.genre === 'Grains');
    const vegetables = products.filter((product) => product.genre === 'Vegetables');
    const flour = products.filter((product) => product.genre === 'Flour');
    const dairy = products.filter((product) => product.genre === 'Dairy');
    const sweets = products.filter((product) => product.genre === 'Sweets');
    const breads = products.filter((product) => product.genre === 'Breads');
    return (
        <>
            <Navbar />
            <div className='mt-5'>
                <ProductCategories />
            </div>
            <ProductSlider headerClass="text-center" containerName="Snacks" products={snacks} />
            <ProductSlider headerClass="text-center" containerName="Spices" products={spices} />
            <ProductSlider headerClass="text-center" containerName="Beverages" products={beverages} />
            <ProductSlider headerClass="text-center" containerName="Grains" products={grains} />
            <ProductSlider headerClass="text-center" containerName="Vegetables" products={vegetables} />
            <ProductSlider headerClass="text-center" containerName="Flour" products={flour} />
            <ProductSlider headerClass="text-center" containerName="Dairy" products={dairy} />
            <ProductSlider headerClass="text-center" containerName="Sweets" products={sweets} />
            <ProductSlider headerClass="text-center" containerName="Breads" products={breads} />
            <Footer />
        </>
    )
}
