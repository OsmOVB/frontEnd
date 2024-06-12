// src/pages/Detail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api, { getTypeDetails } from '../api';
import '../styles/detail.css';

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [highResImage, setHighResImage] = useState(null);
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

    const fetchHighResImage = async () => {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${id}`);
        const data = await response.json();
        if (data.data.length > 0) {
          setHighResImage(data.data[0].images.large);
        }
      } catch (error) {
        console.error('Erro ao buscar imagem de alta resolução', error);
      }
    };

    fetchPokemon();
    fetchHighResImage();
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div className="container" style={{ backgroundColor: typeColor }}>
      <div className="header">
        <button onClick={() => navigate('/items')}>Voltar</button>
        <h2>Detalhes do Pokémon</h2>
        <div className="space"></div>
      </div>
      <div className="detail">
        <div className="detail-info">
          <p><span>Nome:</span> {pokemon.name}</p>
          <p><span>Altura:</span> {pokemon.height} decímetros</p>
          <p><span>Peso:</span> {pokemon.weight} hectogramas</p>
          <p><span>Tipo:</span> {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        </div>
        {highResImage ? (
          <img src={highResImage} alt={pokemon.name} />
        ) : (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    </div>
  );
};

export default Detail;
