import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomepageMain from "./components/HomepageMain";
import HomepageSecond from "./components/HomepageSecond";
import Footer from "./components/Footer";
import ShoppingPage from "./components/ShoppingPage";
import NotFoundPage from "./components/NotFoundPage";
import ProductPage from "./components/ProductPage";
import axios from "axios";

function App() {

  
  const [products, setProducts] = useState([]);
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
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
          <NavBar />
          <ShoppingPage products={products} loading={loading} error={error} />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop/:id",
      element: (
        <ProductPage products={products} loading={loading} error={error} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
