import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function ProductPage({ products, loading, error, addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (loading) {
    return (
      <>
        <NavBar />
        <p className="mt-4 flex h-[60vh] flex-col items-center justify-center gap-8 text-center">
          <div className="loader"></div>
          <div className="font-montserrat font-medium">
            Loading product details...
          </div>
        </p>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar></NavBar>
        <p className="mt-4 flex h-[70vh] w-full flex-col items-center justify-center text-center font-montserrat font-medium text-red-500 max-[500px]:text-sm">
          Error: {error}
        </p>
        <Footer></Footer>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <NavBar></NavBar>
        <p className="mt-4 flex h-[70vh] w-full flex-col items-center justify-center text-center font-montserrat font-medium text-red-500 max-[500px]:text-sm">
          Product not found
        </p>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="flex h-[65vh] items-center justify-center py-8 max-[1100px]:h-auto max-[1100px]:flex-col">
        <div className="flex w-3/4 items-center justify-center gap-8 p-4 max-[1100px]:flex-col max-[1100px]:gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-auto max-h-[400px] max-w-[400px] flex-shrink-0 object-contain max-[1100px]:max-h-[250px] max-[1100px]:max-w-[250px]"
          />
          <div className="flex flex-1 flex-col justify-center text-center font-montserrat max-[1100px]:justify-start">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-4">{product.description}</p>
            <p className="mt-2 font-medium text-green-600">${product.price}</p>
            <button
              className="button-74 mt-4 max-w-[100px] self-center"
              onClick={() => addToCart(product)}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
