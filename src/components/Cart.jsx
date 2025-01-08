import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, updateQuantity }) {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <NavBar />
      <div className="mb-10 mt-6 flex min-h-[65vh] flex-col items-center justify-center gap-4 font-montserrat">
        <h1 className="mb-4 text-2xl font-medium">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center font-medium">Your cart is empty.</p>
        ) : (
          <div className="w-3/4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4 max-[1100px]:flex-col max-[1100px]:gap-4 max-[1100px]:text-center"
              >
                <div className="flex items-center gap-4 max-[1100px]:flex-col max-[1100px]:text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="mt-2 font-medium text-green-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded bg-gray-200 px-2 py-1"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="w-8 text-center">{item.quantity}</p>
                    <button
                      className="rounded bg-gray-200 px-2 py-1"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-4 text-right text-xl font-medium">
              Total: ${calculateTotal()}
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <Link
            to="/checkout"
            className="button-90 block flex h-full w-full min-w-[130px] items-center justify-center"
          >
            Checkout
          </Link>
        )}
      </div>

      <Footer />
    </>
  );
}
