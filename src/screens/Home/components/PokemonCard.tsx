/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useGetPokemonDetails from '../../../hooks/getPokemonDetails';
import BadgePokemonType from '../../../components/UI/Badge/BadgePokemonType';

interface IPokemonCard {
  item: {
    name: string;
    url: string;
  };
}

export default function PokemonCard({item}: IPokemonCard) {
  const {isLoading, pokemonDetails} = useGetPokemonDetails(item.url);

  function pad(id: string, length: number) {
    var str = '' + id;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  return (
    <TouchableOpacity
      className="bg-white rounded-lg overflow-hidden shadow-slate-400 mb-3 mx-3"
      style={{elevation: 5}}>
      {!isLoading && pokemonDetails && (
        <View className="flex-row items-center">
          <Image
            source={{
              uri: pokemonDetails.sprites.other.home.front_default,
            }}
            style={{width: 90, height: 90}}
            className="bg-slate-100"
          />
          <View className="p-4">
            <Text className="font-semibold text-blue-600 text-lg mb-1 capitalize">
              {pokemonDetails.name}
            </Text>
            <View className="flex-row gap-x-1">
              {pokemonDetails.types.map((type: any) => (
                <View key={type.type.name}>
                  <BadgePokemonType type={type.type.name} />
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
      <Text className="absolute right-2 top-2 text-slate-500">
        #{pad(pokemonDetails.id, 3)}
      </Text>
    </TouchableOpacity>
  );
}
