import "./listCards.css";
import Card from "../card/Card";

// renderiza todas las cards del array de productos enviado
const ListCards = ({ products }) => {
  return (
    <div className="listCards">
      {products.map((e) => (
        <Card key={e.id} product={e} />
      ))}
    </div>
  );
};

export default ListCards;
