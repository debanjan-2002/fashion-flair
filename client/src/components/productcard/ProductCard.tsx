import React, { useState } from "react";
import * as api from "../../api/wishlist";

interface ProductCardProps {
    id: string;
    imageSrc: string;
    productName: string;
    price: string;
    liked?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    imageSrc,
    productName,
    price,
    liked = false,
}) => {
    const [isLiked, setIsLiked] = useState(liked);

    const handleWishlistClick = async () => {
        if (isLiked) {
            setIsLiked(false);
            await api.DeleteFromWishlist(id, "LIKED");
        } else {
            setIsLiked(true);
            await api.AddToWishlist(id, "LIKED");
        }
        
    };

    return (
        <div className="flex flex-col items-center justify-center w-60 h-96 bg-white rounded-lg shadow-2xl px-4 py-12 mb-4">
            <div className="flex-shrink-0 mb-8">
                <img
                    src={imageSrc}
                    alt={productName}
                    className="w-50 h-40 rounded-md"
                />
            </div>
            <div className="text-gray-700 text-lg text-center font-semibold mb-2">
                {productName}
            </div>
            <div className="w-full px-4 py-4 flex justify-between ml-4">
                <div className="text-gray-600">$ {price}</div>
                <button
                    onClick={handleWishlistClick}
                    className={`text-rose-400 hover:text-rose-400 flex-shrink-0 ${
                        (!isLiked && !liked) || (!isLiked) ? "text-gray-400" : ""
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={(!isLiked && !liked) || (!isLiked) ? "none" : "#FB7185"}
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
export type { ProductCardProps };
