import "./card.css";

const Card = ({ img, titulo, precio, desc }) => {
  return (
    <>
      <div className="card">
        <img className="img" src={img} alt="logo react" />
        <h3 className="titulo">{titulo}</h3>
        <p className="precio">{precio}</p>
        <p className="desc">{desc}</p>
        <button className="button-card">Agregar al Carrito</button>
      </div>
    </>
  );
};

export default Card;
