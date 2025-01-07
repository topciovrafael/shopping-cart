import React from "react";
import Product from "./Product";

export default function ShoppingPage({ products, loading, error, addToCart }) {
  if (loading) {
    return (
      <p className="text-center mt-4 h-[60vh] flex flex-col justify-center items-center gap-8">
        <div className="loader"></div>
        <div className="font-montserrat font-medium">
          We're getting the products ready! This may take a while.
        </div>
      </p>
    );
  }

  if (error) {
    return <><p className="font-montserrat flex flex-col justify-center items-center h-[70vh] w-full font-medium text-center max-[500px]:text-sm text-red-500 mt-4">Error: {error}</p></>;
  }

  return (
    <div
      id="inainte-de-overlay"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 min-h-[80vh] px-4 mt-6 mb-8"
    >
      {products.map((product) => (
        <div key={product.id} className="max-w-lg mx-auto w-full">
          <Product
            id={product.id}
            image={product.image}
            name={product.title}
            price={product.price}
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
}
