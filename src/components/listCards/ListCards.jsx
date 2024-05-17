import "./listCards.css";
import Card from "../card/Card";

// renderiza todas las cards del array de productos enviado
const ListCards = ({ products }) => {
  return (
    <div className="listCards">
      {products.map((e, i) => (
        <Card
          key={i}
          img={e.img}
          titulo={e.titulo}
          precio={e.precio}
          desc={e.desc}
        />
      ))}
    </div>
  );
};

export default ListCards;
