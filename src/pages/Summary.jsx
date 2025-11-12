import { useEffect, useState } from "react";
import { supabase } from "../client";
import TeamStats from '../components/TeamStats'

const Summary = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await supabase.from("Pokemons").select();

      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
    <div className='summary'>
      <TeamStats pokemons={pokemons} />
    </div>
  )
}

export default Summary