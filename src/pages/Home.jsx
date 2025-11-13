import React from "react";
import pikachuIcon from "../assets/pikachu.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-content">
        <div className="hero-pikachu">
          <img
            src={pikachuIcon}
            alt="Pikachu mascot"
            className="pikachu-mascot"
          />
        </div>
        <div className="hero-text">
          <h1>Welcome to Team Dex!</h1>
          <h3>Build your dream squad of Pokémon</h3>
          <p>
            Design your own creatures, customize their stats, and assemble
            unbeatable teams.
            <span className="tagline">Your Pokédex, your rules. 🧢🔥</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
