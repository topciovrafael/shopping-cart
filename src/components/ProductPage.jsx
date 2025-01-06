import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function ProductPage({ products, loading, error }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (loading) {
    return (
      <>
        <NavBar />
        <p className="text-center mt-4 h-[60vh] flex flex-col justify-center items-center gap-8">
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
    return <><NavBar></NavBar><p className="font-montserrat flex flex-col justify-center items-center h-[70vh] w-full font-medium text-center max-[500px]:text-sm text-red-500 mt-4">Error: {error}</p><Footer></Footer></>;
  }

  if (!product) {
    return <><NavBar></NavBar><p className="font-montserrat flex flex-col justify-center items-center h-[70vh] w-full font-medium text-center max-[500px]:text-sm text-red-500 mt-4">Product not found</p><Footer></Footer></>;
  }

  return (
    <>
      <NavBar />
      <div className="h-[65vh] flex justify-center items-center py-8 max-[1100px]:flex-col max-[1100px]:h-auto">
        <div className="flex justify-center items-center w-3/4 gap-8 p-4 max-[1100px]:flex-col max-[1100px]:gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-[400px] max-h-[400px] h-auto object-contain max-[1100px]:max-w-[250px] max-[1100px]:max-h-[250px] flex-shrink-0"
          />

          <div
            className="flex flex-col justify-center flex-1 text-center font-montserrat max-[1100px]:justify-start"
          >
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-4">{product.description}</p>
            <p className="text-green-600 font-medium mt-2">${product.price}</p>
            <button className="button-74 mt-4 max-w-[100px] self-center">Buy</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

