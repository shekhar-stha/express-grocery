import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../components/header/Navbar";
import ProductCard from "../../components/products/ProductCard";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Footer from "../../components/info/Footer";
import SearchComponent from "../../components/ui-elements/SearchButton";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Search() {
    const router = useRouter();
    const { name } = router.query;
    const [displayedProducts, setDisplayedProducts] = useState(12);

    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) {
        return (
            <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                <h1>Error loading data</h1>
            </section>
        );
    }

    if (!data) {
        return (
            <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </section>
        );
    }


    const products = JSON.parse(data);

    let searchProducts;
    if (name && name !== 'all') {
        searchProducts = products.filter((product) => product.name?.toLowerCase().includes(name?.toLowerCase()));
    } else {
        searchProducts = products; // Show all products
    }

    const shownProducts = searchProducts.slice(0, displayedProducts);

    const uniqueGenres = [...new Set(products.map(product => product.genre))];
    console.log(uniqueGenres);

    const handleViewMore = () => {
        setDisplayedProducts(displayedProducts + 8);
    };
    return (
        <>
            <Head>
                <title>Express Grocery | Indian Nepali Grocery Store</title>
                <meta name="description" content="Explore a diverse range of Indian and Nepali groceries at Express Grocery Store in Charlottesville. Enjoy free delivery over $40" />
                <meta name="keywords" content="Indian groceries, Nepali groceries, Express Grocery Store, 
                        Best Indian Grocery, Grocery Store Charlottesville" />
            </Head>
            <Navbar />
            <section className=" mt-5">
                <div className="container">
                    <div className="d-flex flex-md-row flex-column-reverse justify-content-between">
                        <div>
                            <p className="fs-22 text-capitalize fw-500">Search results for <strong>{name}</strong> <br />
                            </p>
                            <p className="mt-3 fw-500">Showing {shownProducts?.length} of {searchProducts?.length} results</p>
                        </div>
                        <div className="d-xl-none mb-md-0 mb-3">
                            <SearchComponent btnClass="btn-primary" />
                        </div>
                    </div>
                    <div className="products-container-row pb-5">
                        {shownProducts?.map((product) => {
                            return (
                                <Link href={`/product/${product?.id}`} key={product?.id}>

                                    <ProductCard
                                        img={product?.img}
                                        name={product?.name}
                                        category={product?.genre}
                                        id={product?.id}
                                        key={product?.id}
                                    />

                                </Link>
                            );
                        })}
                    </div>
                    {searchProducts.length > displayedProducts && (
                        <div className="d-flex">
                            <button className="btn btn-primary mx-auto" onClick={handleViewMore}>
                                View More
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}
