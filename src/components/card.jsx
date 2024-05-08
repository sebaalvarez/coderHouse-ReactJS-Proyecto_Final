import reactLogo from "../assets/react.svg";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <img className="img" src={reactLogo} alt="logo react" />
        <h3 className="titulo">Titulo Card</h3>
        <p className="desc">
          Descripción de Card Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nobis consequuntur ullam inventore voluptas, in amet
          cum. Reprehenderit quisquam doloremque cumque modi explicabo sunt iure
          maxime provident? Illum consequatur consectetur dolore.
        </p>
      </div>
    </>
  );
};

export default Card;
