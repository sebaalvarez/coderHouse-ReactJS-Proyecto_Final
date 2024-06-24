import "./itemCount.css";

const ItemCount = ({ stock, cant, setCant }) => {
  const onSuma = () => {
    setCant((valor) => (Number(valor) == stock ? valor : Number(valor) + 1));
  };

  const onResta = () => {
    setCant((valor) => (Number(valor) == 0 ? 0 : Number(valor) - 1));
  };

  return (
    <div className="itemCount-container">
      <button onClick={onResta} className="itemCount-buttonAdd">
        -
      </button>
      <p className="itemCount-value"> {cant}</p>
      <button onClick={onSuma} className="itemCount-buttonMin">
        +
      </button>
    </div>
  );
};

export default ItemCount;
