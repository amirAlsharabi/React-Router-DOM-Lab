import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/NavBar/NavBar";
import ProductsDetails from "./pages/ProductDetails/ProductDetails";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Homepage from "./pages/ProductDetails/homepage";
import ProductsList from "./pages/ProductList/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
