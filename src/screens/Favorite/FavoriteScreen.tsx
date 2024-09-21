/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import LayoutWithTopBar from '../../components/Layout/LayoutWithTopBar';
import PokemonCard from '../Home/components/PokemonCard';
import useGetPokemonList from '../../hooks/fetch/useGetPokemonList';

export default function FavoriteScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const {isLoading, pokemonList, refresh} = useGetPokemonList(searchQuery);

  return (
    <View>
      <LayoutWithTopBar title="Favorite">
        <FlatList
          className="h-full"
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: 140,
          }}
          data={pokemonList}
          renderItem={({item}) => <PokemonCard item={item} />}
          keyExtractor={(item: any) => item.name}
          ListEmptyComponent={
            <View className="p-5">
              <Text className="text-2xl font-semibold text-slate-800 text-center mb-2">
                Oops! Its Empty.
              </Text>
              <Text className="text-base text-slate-500 text-center">
                Add pokemon to favorite first.
              </Text>
            </View>
          }
        />
      </LayoutWithTopBar>
    </View>
  );
}
