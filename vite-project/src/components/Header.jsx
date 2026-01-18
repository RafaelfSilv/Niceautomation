import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="Logo.jpeg"
          alt="Logo"
          className="logo"
        />
        
        <span className="brand">Nice Automation</span>
      </div>

      <nav className="header-nav">
        <a href="#">First page</a>
        <a href="#">Second page</a>
        <a href="#">Costumers</a>
        <a href="#">About Us</a>
        <a href="#">Login</a>
      </nav>

      <div className="header-right">
        <Link to="/cadastro" className="btn-primary">
            Cadastro
          </Link>
      </div>
    </header>
  );
}