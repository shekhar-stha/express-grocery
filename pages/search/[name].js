import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../components/header/navbar";
import ProductCard from "../../components/products/productCard";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Search() {
    const router = useRouter();
    const { name } = router.query;
    console.log(name, "Search")
    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;


    const products = JSON.parse(data);
    const searchProducts = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    return (
        <>
            <Navbar />
            <section className=" mt-5">
                <div className="container">
                    <p className="fs-22 text-capitalize fw-500">Search results for <strong>{name}</strong> <br />
                    </p>
                    <p className="mt-3 fw-500">Showing {searchProducts?.length} results</p>
                    <div className="products-container-row">
                        {searchProducts?.map((product) => {
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
                </div>
            </section>
        </>
    )
}
