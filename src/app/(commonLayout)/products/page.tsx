import { IProduct } from "@/types";
import ProductCard from '@/components/Products/ProductCard';
import React from 'react';

const ProductsPage = async () => {
    const res = await fetch("http://localhost:5000/products", {
     cache: "no-store"
    });
    const products = await res.json();
 
    return (
      <div>
        <h1 className="text-center text-4xl mt-8">All Products Page</h1>
        <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto">
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default ProductsPage;