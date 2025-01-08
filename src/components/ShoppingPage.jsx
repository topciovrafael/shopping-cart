import React from "react";
import Product from "./Product";

export default function ShoppingPage({ products, loading, error, addToCart }) {
  if (loading) {
    return (
      <p className="mt-4 flex h-[60vh] flex-col items-center justify-center gap-8 text-center">
        <div className="loader"></div>
        <div className="w-[90%] font-montserrat font-medium">
          We're getting the products ready! This may take a while.
        </div>
      </p>
    );
  }

  if (error) {
    return (
      <>
        <p className="mt-4 flex h-[70vh] w-full flex-col items-center justify-center text-center font-montserrat font-medium text-red-500 max-[500px]:text-sm">
          Error: {error}
        </p>
      </>
    );
  }

  return (
    <div
      id="inainte-de-overlay"
      className="mb-8 mt-6 grid min-h-[80vh] grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {products.map((product) => (
        <div key={product.id} className="mx-auto w-full max-w-lg">
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
