import { useState, useEffect } from "react";
import "./Create.css"

const Create = () => {
  const [name, setName] = useState("");
  const [selectedType, setSelectedType] = useState();
  const [stats, setStats] = useState({
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
    hp: 1,
  });

  // Takes the stat name and the value, and updates it using setStat (useState setter)
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

  useEffect(() => {
    if (selectedType) {
      // Reset all stats to minimum values for new type
      setStats({
        attack: getStatLimits("attack", selectedType)[0],
        defense: getStatLimits("defense", selectedType)[0],
        specialAttack: getStatLimits("specialAttack", selectedType)[0],
        specialDefense: getStatLimits("specialDefense", selectedType)[0],
        speed: getStatLimits("speed", selectedType)[0],
        hp: getStatLimits("hp", selectedType)[0],
      });
    }
  }, [selectedType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPokemon = {
      id: 1111, // temporary ID
      name,
      type: selectedType,
      stats,
      createdAt: new Date().toISOString(),
    };
    console.log("Created Pokemon:", newPokemon);
    // TODO: save to Supabase
    // TODO: add validation for type and name 
  };

  return (
    <div className="create" data-type={selectedType}>
      <h2> Create New Pokémon </h2>
      <form>
        <div className="name-input">
          <label htmlFor="name">Name:</label>
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

        <input type="submit" value="Create Pokémon" onClick={handleSubmit} />
        <input type="button" value="Cancel" />
      </form>
    </div>
  );
};

export default Create;
