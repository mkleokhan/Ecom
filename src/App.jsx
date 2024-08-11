import { useState } from "react";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import SignUp from "./pages/SignUp";
import Profile from "./pages/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product-details/:productId?"
            element={<ProductDetails />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
