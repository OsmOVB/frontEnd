import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getTypeDetails } from "../api";
import "../styles/list.css";

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 14; // Número de itens por página

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const offset = (page - 1) * limit;
        const response = await api.get(
          `/pokemon?offset=${offset}&limit=${limit}`
        );
        const pokemonDetails = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const details = await api.get(pokemon.url);
            const typeUrl = details.data.types[0]?.type?.url;
            if (typeUrl) {
              const typeDetails = await getTypeDetails(typeUrl);
              return {
                ...details.data,
                typeColor: typeDetails?.name || "gray",
              };
            }
            return { ...details.data, typeColor: "gray" };
          })
        );
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error("Erro ao buscar Pokémon", error);
      }
    };

    fetchPokemons();
  }, [page]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <header className="cx-header">
        <div className="align-header">
          <div className="logo">Pokémon API</div>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>
      <div className="content">
        <ul className="pokemon-list">
          {pokemons.map((pokemon) => (
            <li
              key={pokemon.name}
              onClick={() => navigate(`/items/${pokemon.name}`)}
              className="pokemon-card"
              style={{ backgroundColor: pokemon.typeColor }}
            >
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <div className="pokemon-info">
                <p className="pokemon-name">{pokemon.name}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Anterior
          </button>
          <button onClick={() => setPage(page + 1)}>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default List;
