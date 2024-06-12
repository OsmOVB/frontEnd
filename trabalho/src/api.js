// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getTypeDetails = async (typeUrl) => {
  const response = await axios.get(typeUrl);
  return response.data;
};

export default api;
