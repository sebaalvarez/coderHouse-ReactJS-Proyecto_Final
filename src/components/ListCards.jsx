import { ProductData } from "../data/productos";

import Card from "./Card";
import "./listCards.css";

const ListCards = ({ categoria }) => {
  return (
    <div className="listCards">
      {ProductData.filter((e) => e.categoria == categoria)
      .map((e, i) => (
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
