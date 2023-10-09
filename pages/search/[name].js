import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../components/header/navbar";
import ProductCard from "../../components/products/productCard";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Footer from "../../components/info/footer";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Search() {
    const router = useRouter();
    const { name } = router.query;
    const [displayedProducts, setDisplayedProducts] = useState(12);

    const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
    <h1>Error loading data</h1>
  </section>;
  if (!data) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
    <div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </section>;


    const products = JSON.parse(data);
    const searchProducts = products.filter((product) => product.name?.toLowerCase().includes(name?.toLowerCase()))
    const shownProducts = searchProducts.slice(0, displayedProducts);

    const handleViewMore = () => {
        setDisplayedProducts(displayedProducts + 8);
    };
    return (
        <>
            <Navbar />
            <section className=" mt-5">
                <div className="container">
                    <p className="fs-22 text-capitalize fw-500">Search results for <strong>{name}</strong> <br />
                    </p>
                    <p className="mt-3 fw-500">Showing {shownProducts?.length} of {searchProducts?.length} results</p>
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
