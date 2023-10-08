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

    const { data, error } = useSWR('/api/staticdata', fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;


    const products = JSON.parse(data);

    return (
        <>
            <section>
                {products?.map((product) => {
                    return (
                        <Link href={`/product/${product?.id}`} key={product?.id}>
                            <a>
                                <ProductCard
                                    img={product?.img}
                                    name={product?.name}
                                    category={product?.genre}
                                    id={product?.id}
                                    key={product?.id}
                                />
                            </a>
                        </Link>
                    );
                })}
            </section>
        </>
    )
}
