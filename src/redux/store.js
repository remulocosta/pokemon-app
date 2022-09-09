import {configureStore} from '@reduxjs/toolkit';
import {pokemonReducer} from 'src/redux/features/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
