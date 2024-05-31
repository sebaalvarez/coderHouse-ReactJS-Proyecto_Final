import "./navBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../cartWidget/CartWidget";
import { getCategoriasAll } from "../../service/categorias.service";
import { Link } from "react-router-dom";

const NavBar = ({ nomMarca }) => {
  return (
    <div className="container-nav-full">
      <nav className="container-nav">
        <Link to={"/"} className="container-logo">
          <img src={logo} alt="Logo" />
          <p>{nomMarca}</p>
        </Link>

        <ul className="container-menu">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          {getCategoriasAll().map((e) => (
            <li key={e.id}>
              <Link to={`/category/${e.id}`}>{e.titulo}</Link>
            </li>
          ))}
          <li>
            <Link to={"/carrito"}>
              <CartWidget cant="5" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
