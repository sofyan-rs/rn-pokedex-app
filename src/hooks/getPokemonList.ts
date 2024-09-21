import {useEffect, useState} from 'react';
import {ToastMessage} from '../components/UI/Toast/ToastMessage';
import axios from 'axios';

export default function useGetPokemonList(searchQuery: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const getPokemonList = async () => {
    try {
      const response = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
      );
      const data = await response.data;
      setPokemonList(data?.results);
      setFilteredPokemonList(data?.results);
    } catch (error) {
      console.error(error);
      ToastMessage({
        message: 'Failed to fetch Pokemon list',
        position: 'TOP',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refresh = () => {
    getPokemonList();
  };

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredPokemonList(pokemonList);
    } else {
      const filteredPokemon = pokemonList.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      console.log(filteredPokemon);
      setFilteredPokemonList(filteredPokemon);
    }
  }, [searchQuery, pokemonList]);

  useEffect(() => {
    getPokemonList();
  }, []);

  return {
    isLoading,
    pokemonList: filteredPokemonList,
    refresh,
  };
}
