import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">JobApp</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register-company">Register Company</Link>
        <Link to="/register-cesante">Register Cesante</Link>
      </div>
    </nav>
  );
}

export default Navbar;
