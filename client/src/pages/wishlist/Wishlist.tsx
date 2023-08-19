import React, { useState, useEffect } from "react";
import * as api from "../../api/wishlist";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import ProductCatalog, { Product } from "../../components/productcatalog/ProductCatalog";

const Wishlist: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch conversation data from the API
                const response = await api.FetchWishlist();

                let array: Product[] = [];

                for (const product of response.products) {
                    array.push({
                        id: product._id,
                        imageSrc: product.images[0].url,
                        productName: product.name,
                        price: product.price,
                        liked: true,
                    });
                }

                setProducts(array);

            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchProducts();
    }, [products]);

    const clearWishList = async () => {
        await api.DeleteAllFromWishlist();
    }

    return (
        <>
            <section className="bg-zinc-900 h-screen w-screen p-6 flex">
                <Sidebar />
                <div className="rounded rounded-3xl bg-amber-50 grow p-6 flex">
                    <div className="container mx-auto relative grow">
                        <div className="flex flex-col w-full items-center">
                            <div className="flex flex-row w-full pb-3 border-b-2 border-zinc-200 items-center justify-between">
                                <div className="flex flex-row gap-2 items-center justify-center">
                                    <p className="text-xl font-bold">My Wishlist</p>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                <button
                                    className="text-sm bg-pink-50 text-pink-600 font-medium border-2 border-pink-400 py-2 px-4 rounded-lg"
                                    onClick={clearWishList}
                                >
                                    Clear Wish list
                                </button>
                            </div>
                            </div>
                        </div>
                        <ProductCatalog products={products} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wishlist;
