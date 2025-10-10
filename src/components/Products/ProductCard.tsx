import { IProduct } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden  bg-white hover:shadow-lg transition duration-300">
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg text-black font-semibold">{product.product_name}</h3>
          <span className="bg-blue-200 text-blue-800 text-xs font-medium px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <p className="text-gray-500 text-sm">{product.brand}</p>
        <p className="text-xl text-blue-600 font-bold mt-2">${product.price}</p>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="bg-gray-200 cursor-pointer text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300 transition">
            See Details
          </button>
          <button className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
