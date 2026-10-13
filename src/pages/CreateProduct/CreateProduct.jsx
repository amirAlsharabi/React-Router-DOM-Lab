import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateProduct() {
  const [Products, setProducts] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setProducts({ ...Products, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const responded = await axios.post(
      `${import.meta.env.VITE_API_URL}/products`,
      Products,
    );

    navigate("/products");
  }
  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          onChange={handleChange}
          value={Products.title}
          name="title"
          id="title"
        />
        <br></br>
        <label htmlFor="description">description:</label>
        <input
          onChange={handleChange}
          value={Products.description}
          name="description"
          id="description"
        />
        <br />
        <label htmlFor="category">category:</label>
        <input
          onChange={handleChange}
          value={Products.category}
          name="category"
          id="category"
        />
        <br />
        <label htmlFor="price">price:</label>
        <input
          onChange={handleChange}
          value={Products.price}
          name="price"
          id="price"
        />
        <br />
        <label htmlFor="quantity">quantity:</label>
        <input
          onChange={handleChange}
          value={Products.quantity}
          name="quantity"
          id="quantity"
        />
        <br />
        <button>Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
