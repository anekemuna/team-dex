import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import pokeballIcon from "../assets/pokeball.svg";
import "./Gallery.css";

const Gallery = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await supabase.from("Pokemons").select();

      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="gallery">
      <div className="pokemon-grid">
        {pokemons && pokemons.length > 0 ? (
          [...pokemons]
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
        ) : (
          <div className="empty-state">
            <img src={pokeballIcon} alt="Empty Pokéball" className="empty-pokeball" />
            <h2>No Pokémon Yet</h2>
            <p>Start building your dream team by creating your first Pokémon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
