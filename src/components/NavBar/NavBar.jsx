import { Link } from "react-router";
import "./NavBar.css";

function Navbar() {
  return (
  <nav className="navbar">
      <Link to="/" className="nav-link">Homepage</Link>
      <Link to="/products" className="nav-link">All Products</Link>
      <Link to="/products/new-product" className="nav-link">Create new Product</Link>
    </nav>
  );
}

export default Navbar;
