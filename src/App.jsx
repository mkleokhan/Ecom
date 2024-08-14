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

import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import MainLayout from "./components/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/categories"
            element={
              <MainLayout>
                <Categories />
              </MainLayout>
            }
          />
          <Route>
            <Route
              path="/products"
              element={
                <MainLayout>
                  <Products />
                </MainLayout>
              }
            />
            <Route
              path="/products/:category"
              element={
                <MainLayout>
                  <Products />
                </MainLayout>
              }
            />
          </Route>
          <Route
            path="/product-details/:productId?"
            element={
              <MainLayout>
                <ProductDetails />
              </MainLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <MainLayout>
                <SignUp />
              </MainLayout>
            }
          />
          <Route
            path="/signin"
            element={
              <MainLayout>
                <SignIn />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
