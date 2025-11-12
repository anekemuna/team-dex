import { useState } from "react";

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

  const updateStat = (statName, value) => {
    setStats((prev) => ({
      ...prev,
      [statName]: parseInt(value),
    }));
  };


  return (
    <div className="create">
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
          <label>Type:</label>
          {["Fire", "Water", "Grass", "Electric", "Psychic", "Dark"].map(
            (type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="pokemonType"
                  value={type}
                  checked={selectedType === type}
                  onChange={(e) => setSelectedType(e.target.value)}
                />
                {type}
              </label>
            )
          )}
        </div>

        <div className="stat-controls">
          <div className="attack-selection">
            <label htmlFor="attack">Attack:</label>
            <input
              type="range"
              id="attack"
              // min={getStatMin("attack", selectedType)}
              // max={getStatMax("attack", selectedType)}
              value={stats.attack}
              onChange={(e) => updateStat("attack", e.target.value)}
            />
            <span>
              {/* {stats.attack}/{getStatMax("attack", selectedType)} */}
            </span>
          </div>

          <div className="defense-selection">
            <label htmlFor="defense">Defense:</label>
            <input
              type="range"
              id="defense"
              // min={getStatMin("attack", selectedType)}
              // max={getStatMax("attack", selectedType)}
              value={stats.defense}
              onChange={(e) => updateStat("defense", e.target.value)}
            />
            <span>
              {/* {stats.attack}/{getStatMax("attack", selectedType)} */}
            </span>
          </div>
          {/* Repeat for defense, specialAttack, specialDefense, speed, hp */}

          <div className="special-attack-selection">
            <label htmlFor="special-attack">Special Attack:</label>
            <input
              type="range"
              id="special-attack"
              // min={getStatMin("attack", selectedType)}
              // max={getStatMax("attack", selectedType)}
              value={stats.specialAttack}
              onChange={(e) => updateStat("specialAttack", e.target.value)}
            />
            <span>
              {/* {stats.attack}/{getStatMax("attack", selectedType)} */}
            </span>
          </div>

          <div className="special-defense-selection">
            <label htmlFor="special-defense">Special Defense:</label>
            <input
              type="range"
              id="special-defense"
              // min={getStatMin("attack", selectedType)}
              // max={getStatMax("attack", selectedType)}
              value={stats.specialDefense}
              onChange={(e) => updateStat("specialDefense", e.target.value)}
            />
            <span>
              {/* {stats.attack}/{getStatMax("attack", selectedType)} */}
            </span>
          </div>

          <div className="speed-selection">
            <label htmlFor="speed">Speed:</label>
            <input
              type="range"
              id="speed"
              // min={getStatMin("attack", selectedType)}
              // max={getStatMax("attack", selectedType)}
              value={stats.speed}
              onChange={(e) => updateStat("speed", e.target.value)}
            />
            <span>
              {/* {stats.attack}/{getStatMax("attack", selectedType)} */}
            </span>
          </div>

          <div className="hp-selection">
            <label htmlFor="hp">HP:</label>
            <input
              type="range"
              id="hp"
              // min={getStatMin("attack", selectedType)}
              // max={getStatMax("attack", selectedType)}
              value={stats.hp}
              onChange={(e) => updateStat("hp", e.target.value)}
            />
            <span>
              {/* {stats.attack}/{getStatMax("attack", selectedType)} */}
            </span>
          </div>
        </div>

        <input type="submit" value="Create Pokémon" />
        <input type="button" value="Cancel" />
      </form>
    </div>
  );
};

export default Create;
