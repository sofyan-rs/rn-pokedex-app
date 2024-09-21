/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {ToastMessage} from '../components/UI/Toast/ToastMessage';
import axios from 'axios';

export default function useGetPokemonDetails(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState<any>([]);

  const getPokemonDetails = async () => {
    try {
      const response = await axios(url);
      const data = await response.data;
      setPokemonDetails(data);
    } catch (error) {
      console.error(error);
      ToastMessage({
        message: 'Failed to fetch Pokemon details',
        position: 'TOP',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return {
    isLoading,
    pokemonDetails,
  };
}
