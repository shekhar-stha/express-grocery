import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import Navbar from '../../components/header/navbar';
import Head from 'next/head';
import CallNow from '../../components/buttons/callNow';
import ProductSlider from '../../components/products/productSlider';
import Gallery from '../../components/info/gallery';
import Footer from '../../components/info/footer';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ProductInfo() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id, "ProductInfo")

    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data)
    const products = JSON.parse(data);

    const product = products.find((product) => product.id == id)
    const genre = product?.genre;

    const similarProducts = products.filter((product) => product.genre == genre && product.id != id)
    console.log(similarProducts, "similarProducts")
    return (

        <>
            <Head>
                <title>Homepage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Navbar />
                {/* Product Detail */}
                <section className='pt-5 mt-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-lg-0 mb-4 bg-transparent">
                                <img className='product-thumbnail img-fluid' src={product?.img} />
                            </div>

                            <div className="col-lg-6">
                                <div className="product-detail-info">
                                    <h2 className="name">{product?.name}</h2>
                                    <p className='fs-18 fw-500 pb-4'>Product ID: {product?.id}</p>
                                    <p className='pb-3'><span className='text-primary fw-600'>Genre:</span> {product?.genre}</p>
                                    <p className='text-primary mb-2 fw-600'>Product Description:</p>
                                    <p className="information">
                                        {product?.description}

                                    </p>

                                    <div className='mt-4'>
                                        <CallNow className="btn btn-primary px-5 mt-2" />
                                        <Link className='btn btn-outline-primary border-2 fw-500 ms-3 mt-2 px-5' href={`/contact`} key={product?.id} >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {
                    similarProducts.length > 0 && (<ProductSlider containerName="Similar Products" products={similarProducts} />)
                }

                <ProductSlider headerClass="text-start" containerName="Other Products" products={products} />
                <Gallery />
            </div>
            <Footer />
        </>
    )
}
