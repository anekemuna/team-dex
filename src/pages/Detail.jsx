import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { supabase } from "../client";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemonDetail = async () => {
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
        console.error("Error fetching Pokemon Details: ", error);
        setError("Failed to load Pokémon details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getPokemonDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <div className="loading">Loading Pokémon details...</div>
        </div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <div className="error">{error || "Pokémon not found"}</div>
          <Link to="/gallery" className="back-button">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`detail-page type-${pokemon.type.toLowerCase()}`}>
      <div className="detail-container">
        <div className="detail-header">
          <Link to="/gallery" className="back-button">
            ← Back to Gallery
          </Link>
          <h1 className="pokemon-name">{pokemon.name}</h1>
          <span className="pokemon-id">#{pokemon.id}</span>
        </div>

        <div className="detail-content">
          <div className="pokemon-info">
            <div className="type-badge">
              <span className="type-label">Type</span>
              <span className="type-value">{pokemon.type}</span>
            </div>

            <div className="stats-section">
              <h3>Battle Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Attack</span>
                  <span className="stat-value">{pokemon.attack}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Defense</span>
                  <span className="stat-value">{pokemon.defense}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Sp. Attack</span>
                  <span className="stat-value">{pokemon.special_attack}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Sp. Defense</span>
                  <span className="stat-value">{pokemon.special_defense}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Speed</span>
                  <span className="stat-value">{pokemon.speed}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">HP</span>
                  <span className="stat-value">{pokemon.hp}</span>
                </div>
              </div>
            </div>

            <div className="meta-info">
              <p><strong>Created:</strong> {new Date(pokemon.created_at).toLocaleDateString()}</p>
              {pokemon.updated_at && (
                <p><strong>Last Updated:</strong> {new Date(pokemon.updated_at).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <Link 
            to={`/gallery/edit/${pokemon.id}`} 
            className="edit-button"
          >
            Edit Pokémon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
