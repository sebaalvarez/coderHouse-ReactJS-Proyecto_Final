import "./itemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, inicial }) => {
  const [cantidad, setCantidad] = useState(inicial);

  useEffect(() => {}, []);

  const onSuma = () => {
    setCantidad((valor) =>
      Number(valor) == stock ? valor : Number(valor) + 1
    );
  };

  const onResta = () => {
    setCantidad((valor) => (Number(valor) == 0 ? 0 : Number(valor) - 1));
  };

  return (
    <div className="itemCount-container">
      <button onClick={onResta} className="itemCount-buttonAdd">
        -
      </button>
      <p className="itemCount-value"> {cantidad}</p>
      <button onClick={onSuma} className="itemCount-buttonMin">
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ItemCount;
