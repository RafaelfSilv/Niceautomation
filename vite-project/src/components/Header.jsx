import "./Header.css";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="https://via.placeholder.com/40"
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
        <button className="btn-primary">Cadastro</button>
      </div>
    </header>
  );
}