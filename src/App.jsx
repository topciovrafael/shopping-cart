import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomepageMain from "./components/HomepageMain";
import HomepageSecond from "./components/HomepageSecond";
import Footer from "./components/Footer";
import ShoppingPage from "./components/ShoppingPage";
import NotFoundPage from "./components/NotFoundPage";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <HomepageMain />
          <HomepageSecond />
          <Footer />
        </>
      ),
      errorElement: <NotFoundPage />,
    },
    {
      path: "/shop",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <ShoppingPage products={products} loading={loading} error={error} addToCart={addToCart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop/:id",
      element: (
        <>
          <ScrollToTop />
          <ProductPage
            products={products}
            loading={loading}
            error={error}
            addToCart={addToCart}
          />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <ScrollToTop />
          <Cart cartItems={cart} updateQuantity={updateQuantity} />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
