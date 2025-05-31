import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getListMovies } from '../../services/api/ListMoviesApi'; // 

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const data = await getListMovies(); // 
  return data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { items: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;
