import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getListMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listMovies`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch listMovies:', error);
    return [];
  }
};
