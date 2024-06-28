import "./navBar.css";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartWidget from "../cartWidget/CartWidget";
import Cargando from "../cargando/Cargando";
import { getCategoriasAll } from "../../service/categorias.service";

const NavBar = ({ nomMarca }) => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const todasLasCategorias = async () => {
      setData(await getCategoriasAll());
      setCargando(false);
    };

    todasLasCategorias();
  }, []);

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
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
              {data.map((e) => (
                <li key={e.id}>
                  <Link to={`/category/${e.id}`}>{e.titulo}</Link>
                </li>
              ))}
              <li>
                <Link to={"/carrito"}>Carrito</Link>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
