import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Cart({ cartItems, updateQuantity }) {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[65vh] font-montserrat mt-6 mb-10 gap-4">
        <h1 className="text-2xl font-medium mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center font-medium">Your cart is empty.</p>
        ) : (
          <div className="w-3/4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4 max-[1100px]:flex-col max-[1100px]:text-center max-[1100px]:gap-4"
              >
                <div className="flex items-center gap-4 max-[1100px]:flex-col max-[1100px]:text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="text-green-600 font-medium mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="text-center w-8">{item.quantity}</p>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
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
            <div className="text-right font-medium text-xl mt-4">
              Total: ${calculateTotal()}
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
        <button className="button-74">Checkout</button>
        )}
      </div>
      
      <Footer />
    </>
  );
}
