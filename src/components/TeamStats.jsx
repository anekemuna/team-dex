import React from "react";
import "./TeamStats.css";

const TeamStats = ({ pokemons }) => {
  if (!pokemons || pokemons.length === 0) return null;

  const totalCount = pokemons.length;

  const typeDistribution = pokemons.reduce((acc, pokemon) => {
    acc[pokemon.type] = (acc[pokemon.type] || 0) + 1;
    return acc;
  }, {});

  const avgStats = pokemons.reduce(
    (acc, pokemon) => {
      acc.attack += pokemon.attack;
      acc.defense += pokemon.defense;
      acc.special_attack += pokemon.special_attack;
      acc.special_defense += pokemon.special_defense;
      acc.speed += pokemon.speed;
      acc.hp += pokemon.hp;
      return acc;
    },
    {
      attack: 0,
      defense: 0,
      special_attack: 0,
      special_defense: 0,
      speed: 0,
      hp: 0,
    }
  );

  Object.keys(avgStats).forEach((stat) => {
    avgStats[stat] = Math.round((avgStats[stat] / totalCount) * 10) / 10;
  });

  return (
    <div className="team-stats">
      <h3>Team Overview</h3>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Pokemon</h4>
          <span className="stat-value">{totalCount}</span>
        </div>

        <div className="stat-card">
          <h4>Type Diversity</h4>
          <span className="stat-value">
            {Object.keys(typeDistribution).length}/6
          </span>
        </div>
      </div>

      <div className="type-breakdown">
        <h4>Type Distribution</h4>
        {Object.entries(typeDistribution).map(([type, count]) => (
          <div key={type} className={`type-stat type-${type.toLowerCase()}`}>
            <span>{type}</span>
            <span>
              {count} ({Math.round((count / totalCount) * 100)}%)
            </span>
          </div>
        ))}
      </div>

      <div className="avg-stats">
        <h4>Average Stats</h4>
        <div className="avg-grid">
          <span>Attack: {avgStats.attack}</span>
          <span>Defense: {avgStats.defense}</span>
          <span>Sp. Att: {avgStats.special_attack}</span>
          <span>Sp. Def: {avgStats.special_defense}</span>
          <span>Speed: {avgStats.speed}</span>
          <span>HP: {avgStats.hp}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
