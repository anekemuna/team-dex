import React from "react";
import { Link } from "react-router";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <Link to={`/gallery/detail/${pokemon.id}`} className="card-link">
      <div className={`card type-${pokemon.type.toLowerCase()}`}>
        <p>#{pokemon.id}</p>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
      </div>
    </Link>
  );
};

export default Card;
