import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { supabase } from "../client";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [stats, setStats] = useState({
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
    hp: 1,
  });

  // fetches pokemon's detail from database
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("Pokemons")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setPokemon(data);
      } catch (error) {
        console.error("Failed to Fetch Pokemon: ", error);
        setError("Failed to load Pokemon for Editing");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchPokemon();
    }
  }, [id]);

  // prepopulate the form
  useEffect(() => {
    if (pokemon) {
      setName(pokemon.name || "");
      setSelectedType(pokemon.type || "");
      setStats({
        attack: pokemon.attack || 1,
        defense: pokemon.defense || 1,
        specialAttack: pokemon.special_attack || 1,
        specialDefense: pokemon.special_defense || 1,
        speed: pokemon.speed || 1,
        hp: pokemon.hp || 1,
      });
    }
  }, [pokemon]);

  const updateStat = (statName, value) => {
    setStats((prev) => ({
      ...prev,
      [statName]: parseInt(value),
    }));
  };

  // Sets upper and lowerbound of stats based on the type of pokemon
  const getStatLimits = (statName, type) => {
    const limits = {
      Fire: {
        attack: [1, 10],
        defense: [1, 8],
        specialAttack: [1, 9],
        specialDefense: [1, 6],
        speed: [1, 8],
        hp: [1, 7],
      },
      Water: {
        attack: [1, 7],
        defense: [1, 9],
        specialAttack: [1, 8],
        specialDefense: [1, 9],
        speed: [1, 6],
        hp: [1, 10],
      },
      Grass: {
        attack: [1, 6],
        defense: [1, 8],
        specialAttack: [1, 9],
        specialDefense: [1, 10],
        speed: [1, 5],
        hp: [1, 8],
      },
      Electric: {
        attack: [1, 6],
        defense: [1, 5],
        specialAttack: [1, 10],
        specialDefense: [1, 7],
        speed: [1, 10],
        hp: [1, 6],
      },
      Psychic: {
        attack: [1, 4],
        defense: [1, 5],
        specialAttack: [1, 10],
        specialDefense: [1, 9],
        speed: [1, 8],
        hp: [1, 7],
      },
      Dark: {
        attack: [1, 9],
        defense: [1, 7],
        specialAttack: [1, 6],
        specialDefense: [1, 8],
        speed: [1, 9],
        hp: [1, 6],
      },
    };
    return limits[type]?.[statName] || [1, 10];
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name Field Cannot Be Empty!");
    } else if (selectedType === "") {
      alert("A Type Has To Be Selected!");
    } else {
      await supabase
        .from("Pokemons")
        .update({
          name: name,
          type: selectedType,
          attack: stats.attack,
          defense: stats.defense,
          special_attack: stats.specialAttack,
          special_defense: stats.specialDefense,
          speed: stats.speed,
          hp: stats.hp,
        })
        .eq("id", id);

      alert(`${pokemon.name} has been successfully updated!`);
      window.location = `/gallery/detail/${id}`;
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${pokemon.name}? This action cannot be undone.`
    );

    if (confirmDelete) {
      try {
        const { error } = await supabase.from("Pokemons").delete().eq("id", id);

        if (error) throw error;

        alert(`${pokemon.name} has been deleted successfully!`);
        // Redirect to gallery after successful deletion
        window.location = "/gallery";
      } catch (error) {
        console.error("Error deleting Pokémon:", error);
        alert("Failed to delete Pokémon. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="edit">
        <div className="loading">Loading Pokémon data...</div>
      </div>
    );
  }

  if (error || !pokemon) {
    // error state or pokemon is null
    return (
      <div className="edit-page">
        <div className="error">{error || "Pokémon not found"}</div>
        <Link to="/gallery" className="back-button">
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="edit" data-type={selectedType}>
      <div className="edit-header">
        <Link to={`/gallery/detail/${id}`} className="back-button">
          ← Back to Details
        </Link>
        <h1 className="pokemon-name">Editing: {pokemon.name}</h1>
        <span className="pokemon-id">#{pokemon.id}</span>
      </div>

      <form>
        <div className="name-input">
          <label htmlFor="name">
            <h3>Name:</h3>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Pokémon name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="type-selection">
          <h3>Choose Type:</h3>
          <div className="type-options">
            {["Fire", "Water", "Grass", "Electric", "Psychic", "Dark"].map(
              (type) => (
                <label key={type} className="type-option">
                  <input
                    type="radio"
                    name="pokemonType"
                    value={type}
                    checked={selectedType === type}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span className="type-label">{type}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="stat-controls">
          <h3>Set Stats</h3>
          {/* ATTACK */}
          <div className="attack-selection">
            <label htmlFor="attack">Attack:</label>
            <input
              type="range"
              id="attack"
              min={getStatLimits("attack", selectedType)[0]}
              max={getStatLimits("attack", selectedType)[1]}
              value={stats.attack}
              onChange={(e) => updateStat("attack", e.target.value)}
            />
            <span>
              {stats.attack}/{getStatLimits("attack", selectedType)[1]}
            </span>
          </div>

          {/* DEFENSE */}

          <div className="defense-selection">
            <label htmlFor="defense">Defense:</label>
            <input
              type="range"
              id="defense"
              min={getStatLimits("defense", selectedType)[0]}
              max={getStatLimits("defense", selectedType)[1]}
              value={stats.defense}
              onChange={(e) => updateStat("defense", e.target.value)}
            />
            <span>
              {stats.defense}/{getStatLimits("defense", selectedType)[1]}
            </span>
          </div>

          {/* SPECIAL ATTACK */}

          <div className="special-attack-selection">
            <label htmlFor="special-attack">Special Attack:</label>
            <input
              type="range"
              id="special-attack"
              min={getStatLimits("specialAttack", selectedType)[0]}
              max={getStatLimits("specialAttack", selectedType)[1]}
              value={stats.specialAttack}
              onChange={(e) => updateStat("specialAttack", e.target.value)}
            />
            <span>
              {stats.specialAttack}/
              {getStatLimits("specialAttack", selectedType)[1]}
            </span>
          </div>

          {/* SPECIAL DEFENSE */}
          <div className="special-defense-selection">
            <label htmlFor="special-defense">Special Defense:</label>
            <input
              type="range"
              id="special-defense"
              min={getStatLimits("specialDefense", selectedType)[0]}
              max={getStatLimits("specialDefense", selectedType)[1]}
              value={stats.specialDefense}
              onChange={(e) => updateStat("specialDefense", e.target.value)}
            />
            <span>
              {stats.specialDefense}/
              {getStatLimits("specialDefense", selectedType)[1]}
            </span>
          </div>

          {/* SPEED */}
          <div className="speed-selection">
            <label htmlFor="speed">Speed:</label>
            <input
              type="range"
              id="speed"
              min={getStatLimits("speed", selectedType)[0]}
              max={getStatLimits("speed", selectedType)[1]}
              value={stats.speed}
              onChange={(e) => updateStat("speed", e.target.value)}
            />
            <span>
              {stats.speed}/{getStatLimits("speed", selectedType)[1]}
            </span>
          </div>

          {/* HP */}
          <div className="hp-selection">
            <label htmlFor="hp">HP:</label>
            <input
              type="range"
              id="hp"
              min={getStatLimits("hp", selectedType)[0]}
              max={getStatLimits("hp", selectedType)[1]}
              value={stats.hp}
              onChange={(e) => updateStat("hp", e.target.value)}
            />
            <span>
              {stats.hp}/{getStatLimits("hp", selectedType)[1]}
            </span>
          </div>
        </div>

        <div className="form-buttons">
          <input
            type="submit"
            value="Update Pokémon"
            onClick={handleUpdate}
            className="update-button"
          />
          <input
            type="button"
            value="Delete Pokémon"
            onClick={handleDelete}
            className="delete-button"
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
