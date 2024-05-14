import { ProductData } from "../data/productos";

import Card from "./Card";
import "./listCards.css";

const ListCards = () => {
  return (
    <div className="listCards">
      {ProductData.map((e, i) => (
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
