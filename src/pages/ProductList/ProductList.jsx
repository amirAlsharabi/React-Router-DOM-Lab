import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const allProducts = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`,
    );

    setProducts(allProducts.data);
    console.log("function called");
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((oneProduct) => (
        <div key={oneProduct._id}>
          <p>title: {oneProduct.title}</p>
          <Link to={`/products/${oneProduct._id}`}>Go to product Details</Link>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
