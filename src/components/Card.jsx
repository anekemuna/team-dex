/*
 * Pokémon type SVG icons from: 
 * https://github.com/duiker101/pokemon-type-svg-icons
 * by duiker101
 */

import { Link } from "react-router";
import "./Card.css";

import fireIcon from "../assets/fire.svg";
import waterIcon from "../assets/water.svg";
import grassIcon from "../assets/grass.svg";
import electricIcon from "../assets/electric.svg";
import psychicIcon from "../assets/psychic.svg";
import darkIcon from "../assets/dark.svg";

const Card = ({ pokemon }) => {
//   const getTypeEmoji = (type) => {
//     const typeEmojis = {
//       Fire: "🔥",
//       Water: "💧",
//       Grass: "🌱",
//       Electric: "⚡",
//       Psychic: "🔮",
//       Dark: "🌑",
//     };
//     return typeEmojis[type] || "❓";
//   };

  const getTypeIcon = (type) => {
    const typeIcons = {
      Fire: fireIcon,
      Water: waterIcon,
      Grass: grassIcon,
      Electric: electricIcon,
      Psychic: psychicIcon,
      Dark: darkIcon,
    };
    return typeIcons[type] || null;
  };

  return (
    <Link to={`/gallery/detail/${pokemon.id}`} className="card-link">
      <div className={`card type-${pokemon.type.toLowerCase()}`}>
        <p>#{pokemon.id}</p>
        {/* <div className="pokemon-image">
          <span className="type-emoji">{getTypeEmoji(pokemon.type)}</span>
        </div> */}
        <div className="pokemon-image">
          <img
            src={getTypeIcon(pokemon.type)}
            alt={`${pokemon.type} type icon`}
            className="type-icon"
          />
        </div>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
      </div>
    </Link>
  );
};

export default Card;
