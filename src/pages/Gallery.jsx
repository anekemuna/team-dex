import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

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
      {pokemons && pokemons.length > 0 ? (
        [...pokemons]
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
      ) : (
        <h2>{"No Pokémons Yet 💔"}</h2>
      )}
    </div>
  );
};

export default Gallery;
