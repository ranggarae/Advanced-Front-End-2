import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MoviesReducer';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
