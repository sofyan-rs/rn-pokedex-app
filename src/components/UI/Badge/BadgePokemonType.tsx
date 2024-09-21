import {Text} from 'react-native';
import React from 'react';

interface IBadgePokemonType {
  type: string;
}

export default function BadgePokemonType({type}: IBadgePokemonType) {
  const getPokemonTypeBgClass = () => {
    switch (type.toLowerCase()) {
      case 'grass':
        return 'bg-pokemon-grass';
      case 'fire':
        return 'bg-pokemon-fire';
      case 'water':
        return 'bg-pokemon-water';
      case 'poison':
        return 'bg-pokemon-poison';
      case 'bug':
        return 'bg-pokemon-bug';
      case 'normal':
        return 'bg-pokemon-normal';
      case 'fighting':
        return 'bg-pokemon-fighting';
      case 'flying':
        return 'bg-pokemon-flying';
      case 'ground':
        return 'bg-pokemon-ground';
      case 'rock':
        return 'bg-pokemon-rock';
      case 'ghost':
        return 'bg-pokemon-ghost';
      case 'steel':
        return 'bg-pokemon-steel';
      case 'electric':
        return 'bg-pokemon-electric';
      case 'psychic':
        return 'bg-pokemon-psychic';
      case 'ice':
        return 'bg-pokemon-ice';
      case 'dragon':
        return 'bg-pokemon-dragon';
      case 'dark':
        return 'bg-pokemon-dark';
      case 'fairy':
        return 'bg-pokemon-fairy';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <Text
      key={type}
      className={
        getPokemonTypeBgClass() +
        ' text-white rounded-sm font-medium text-xs uppercase text-center px-2 py-0.5'
      }>
      {type}
    </Text>
  );
}
