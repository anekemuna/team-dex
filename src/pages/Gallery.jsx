import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import TeamStats from "../components/TeamStats";

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
      <TeamStats pokemons={pokemons} />

      <div className="pokemon-grid">
        {pokemons && pokemons.length > 0 ? (
          [...pokemons]
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
        ) : (
          <h2>{"No Pokémons Yet 💔"}</h2>
        )}
      </div>
    </div>
  );
};

export default Gallery;
