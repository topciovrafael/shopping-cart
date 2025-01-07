import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return; 
    }

   
    const orderDetails = {
      ...formData,
      cart: cartItems,
      total: cartItems
        .reduce((sum, item) => sum + item.quantity * item.price, 0)
        .toFixed(2),
    };

    try {
      await emailjs.send(
        "service_j1eyop8", //service ID
        "template_w560kg9", //template
        orderDetails,
        "i4MfMADSRYsbslEsc" //cheie
      );
      navigate("/thanks");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error submitting your order. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[65vh] font-montserrat mt-6 mb-10 gap-4">
        <h1 className="text-2xl font-semibold">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg p-6 border rounded shadow-md bg-white"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded resize-none"
            ></textarea>
          </div>

          <div className="w-full p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            {cartItems.length > 0 ? (
              <ul className="mt-2">
                {cartItems.map((item) => (
                  <li key={item.id} className="text-sm">
                    {item.quantity}x {item.title} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
              <p className="mt-2 font-bold">
                Total: $
                {cartItems
                  .reduce((sum, item) => sum + item.quantity * item.price, 0)
                  .toFixed(2)}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`block text-center px-4 font-medium py-2 rounded ${
              cartItems.length === 0
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={cartItems.length === 0}
          >
            Submit Order
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
