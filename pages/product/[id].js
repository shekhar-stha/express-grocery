import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import Navbar from '../../components/header/Navbar';
import Head from 'next/head';
import CallNow from '../../components/buttons/CallNow';
import ProductSlider from '../../components/products/ProductSlider';
import Gallery from '../../components/info/Gallery';
import Footer from '../../components/info/Footer';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ProductInfo() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id, "ProductInfo")

    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <h1>Error loading data</h1>
    </section>;
    if (!data) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </section>;

    console.log(data)
    const products = JSON.parse(data);

    const product = products.find((product) => product.id == id)
    const genre = product?.genre;

    const similarProducts = products.filter((product) => product.genre == genre && product.id != id)
    console.log(similarProducts, "similarProducts")
    return (

        <>
            <Head>
                <title>{product?.name} {product?.genre} | Express Grocery Store</title>
                <meta name="description" content={product?.description} />
                <meta name="keywords" content={`${product?.name}, ${product?.genre}, Express Grocery, Indian Grocery Charlottesville, Nepali Grocery Charlottesville`} />
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
