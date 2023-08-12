import React from "react";

interface ProductCardProps {
    imageSrc: string;
    productName: string;
    price: string;
    onWishlistClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    productName,
    price,
    onWishlistClick,
}) => {
    return (
        <div className="flex bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex-shrink-0">
                <img
                    src={imageSrc}
                    alt={productName}
                    className="w-32 h-40 rounded-md"
                />
            </div>

            <div className="flex-grow flex flex-col justify-between ml-4">
                <div>
                    <div className="text-gray-700 text-lg font-semibold mb-2">
                        {productName}
                    </div>
                    <div className="text-gray-600">{price}</div>
                </div>

                <button
                    onClick={onWishlistClick}
                    className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 6h14M5 10h14M5 14h14M5 18h14"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
