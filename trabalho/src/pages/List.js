import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { getTypeDetails } from '../api';
import '../styles/list.css';

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 8; // Número de itens por página

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const offset = (page - 1) * limit;
        const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
        const pokemonDetails = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const details = await api.get(pokemon.url);
            const typeUrl = details.data.types[0]?.type?.url;
            if (typeUrl) {
              const typeDetails = await getTypeDetails(typeUrl);
              return { ...details.data, typeColor: typeDetails?.name || 'gray' };
            }
            return { ...details.data, typeColor: 'gray' };
          })
        );
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Erro ao buscar Pokémon', error);
      }
    };

    fetchPokemons();
  }, [page]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="align-header">
        <button onClick={handleLogout} style={{ alignSelf: 'flex-start' }}>Sair</button>
        <h2>Lista de Pokémon</h2>
        <div className="space"></div>
      </div>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => navigate(`/items/${pokemon.name}`)}
            style={{ backgroundColor: pokemon.typeColor }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={() => setPage(page + 1)}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default List;
