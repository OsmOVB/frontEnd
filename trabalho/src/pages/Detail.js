import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api, { getTypeDetails } from '../api';
import '../styles/detail.css';
import '../styles/global.css';

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [typeColor, setTypeColor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await api.get(`/pokemon/${id}`);
        setPokemon(response.data);
        const typeDetails = await getTypeDetails(response.data.types[0].type.url);
        setTypeColor(typeDetails.color.name);
      } catch (error) {
        console.error('Erro ao buscar Pokémon', error);
      }
    };

    fetchPokemon();
  }, [id]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container" style={{ backgroundColor: typeColor }}>
      <header className="cx-header">
        <div className="align-header">
          <button className="back-button" onClick={() => navigate('/items')}>Voltar</button>
          <div className="header-title">Detalhes do Pokémon</div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="detail">
        {pokemon ? (
          <div className="detail-info">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="pokemon-image" />
            <div className="info-text">
              <p><span>Nome:</span> {pokemon.name}</p>
              <p><span>Altura:</span> {pokemon.height} decímetros</p>
              <p><span>Peso:</span> {pokemon.weight} hectogramas</p>
              <p><span>Tipo:</span> {pokemon.types.map((type) => type.type.name).join(', ')}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
