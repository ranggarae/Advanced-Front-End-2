import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

// GET
export const getListMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listMovies`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch listMovies:', error);
    return [];
  }
};

// ADD
export const addMovie = async (newMovie) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/listMovies`, newMovie);
    return response.data;
  } catch (error) {
    console.error('Failed to add movie:', error);
    throw error;
  }
};

// UPDATE
export const updateMovie = async (id, updatedMovie) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/listMovies/${id}`, updatedMovie);
    return response.data;
  } catch (error) {
    console.error('Failed to update movie:', error);
    throw error;
  }
};

// DELETE
export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/listMovies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete movie:', error);
    throw error;
  }
};
