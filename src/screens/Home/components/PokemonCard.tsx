/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useGetPokemonDetails from '../../../hooks/fetch/useGetPokemonDetails';
import BadgePokemonType from '../../../components/UI/Badge/BadgePokemonType';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/navigation.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getPokemonIndex} from '../../../lib/utils/getPokemonIndex';

interface IPokemonCard {
  item: {
    name: string;
    url: string;
  };
}

export default function PokemonCard({item}: IPokemonCard) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {isLoading, pokemonDetails} = useGetPokemonDetails(item.url);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonDetail', {
          name: item.name,
          url: item.url,
          data: pokemonDetails,
        })
      }
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
        #{getPokemonIndex(pokemonDetails.id, 3)}
      </Text>
    </TouchableOpacity>
  );
}
