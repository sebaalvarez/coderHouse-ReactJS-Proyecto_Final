import "./listCards.css";
import Card from "../card/Card";

// renderiza todas las cards del array de productos enviado
const ListCards = ({ products }) => {
  return (
    <div className="listCards">
      {products.map((e) => (
        <Card
          key={e.id}
          id={e.id}
          img={e.img}
          titulo={e.titulo}
          precio={e.precio}
          descuento={e.descuento}
          desc={e.desc}
          stock={e.stock}
        />
      ))}
    </div>
  );
};

export default ListCards;
