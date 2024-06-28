import "./cargando.css";
import loadImg from "../../assets/cargando.gif";

const Cargando = () => {
  return (
    <div className="div-cargando">
      <img src={loadImg} alt="imagen cargando" />
    </div>
  );
};

export default Cargando;
