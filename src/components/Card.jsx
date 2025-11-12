import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className={`card type-${pokemon.type.toLowerCase()}`}>
      <p>#{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.type}</p>
    </div>
  );
};

export default Card;
