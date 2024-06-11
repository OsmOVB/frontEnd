import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
export const Poke = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = useCallback(async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon"); //
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);



  if (!pokemons.length) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }} >
        <h1>Pokemons</h1>
        {pokemons.map((pokemon, index) => (
            <div key={index}>
            <h2>{pokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
          </div>
        ))}
    </div>
  );
};
