import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Spin } from "antd";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  async function getProduct() {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${productId}`,
    );
    setProduct(response.data);
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>Products Details</h1>

      {product ? (
        <div>
          <h2>Title: {product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}

export default ProductDetails;
