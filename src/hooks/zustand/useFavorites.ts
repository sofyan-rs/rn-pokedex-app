import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

type Pokemon = {
  name: string;
  url: string;
  data: any;
};

type FavoritesStore = {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (pokemonName: string) => void;
  isFavorite: (pokemonName: string) => boolean;
};

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: pokemon =>
        set(state => ({
          favorites: [...state.favorites, pokemon],
        })),
      removeFavorite: pokemonName =>
        set(state => ({
          favorites: state.favorites.filter(p => p.name !== pokemonName),
        })),
      isFavorite: pokemonName =>
        get().favorites.some(p => p.name === pokemonName),
    }),
    {
      name: 'pokemon-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
