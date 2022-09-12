import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./pages/Categories/Categories";
import SubCategories from "./pages/SubCategories/SubCategories";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ShoppingCard from "./pages/ShoppingCard/ShoppingCard";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:category_id" element={<SubCategories />} />
        <Route path="/products/:product_id" element={<Products />} />
        <Route
          path="/products/:product_id/product-detail/:product"
          element={<ProductDetails />}
        />
        <Route path="/card" element={<ShoppingCard />} />
      </Routes>
    </>
  );
}

export default App;
