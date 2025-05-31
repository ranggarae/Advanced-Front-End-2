import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MoviesReducer';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // tambahkan reducer lain di sini
  },
});

export default store; 
