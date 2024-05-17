import "./navBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = ({ nomMarca }) => {
  return (
    <div className="container-nav-full">
      <nav className="container-nav">
        <a className="container-logo" href="#">
          <img src={logo} alt="Logo" />
          <p>{nomMarca}</p>
        </a>

        <ul className="container-menu">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#">Categorias</a>
          </li>
          <li>
            <a href="#">
              <CartWidget cant="5" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
