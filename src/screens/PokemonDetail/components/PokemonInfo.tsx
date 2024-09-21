/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {getPokemonIndex} from '../../../lib/utils/getPokemonIndex';
import BadgePokemonType from '../../../components/UI/Badge/BadgePokemonType';
import {HeartIcon} from 'lucide-react-native';
import {useFavorites} from '../../../hooks/zustand/useFavorites';

type Props = {
  name: string;
  url: string;
  data: any;
};

export default function PokemonInfo({name, url, data}: Props) {
  const {isFavorite, addFavorite, removeFavorite} = useFavorites();

  return (
    <View>
      <View className="flex-row items-center justify-between gap-5">
        <View>
          <Text className="text-slate-500 text-base">
            #{getPokemonIndex(data.id, 3)}
          </Text>
          <Text className="text-2xl text-blue-700 font-semibold capitalize">
            {data.name}
          </Text>
          <View className="flex-row gap-x-1 mt-2">
            {data.types.map((type: any) => (
              <View key={type.type.name}>
                <BadgePokemonType type={type.type.name} />
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          className="bg-slate-100 p-3 rounded-full"
          onPress={() => {
            if (isFavorite(data.name)) {
              removeFavorite(data.name);
            } else {
              addFavorite({
                name,
                url,
                data,
              });
            }
          }}>
          <HeartIcon
            fill={isFavorite(data.name) ? '#ef4444' : '#f1f5f9'}
            className="text-red-500"
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: data.sprites.other.home.front_default,
        }}
        style={{width: Dimensions.get('window').width - 40, height: 300}}
        className="bg-slate-100 object-contain my-5"
      />
    </View>
  );
}
