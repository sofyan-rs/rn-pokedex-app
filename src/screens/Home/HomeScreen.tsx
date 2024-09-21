/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBox from './components/SearchBox';
import PokemonCard from './components/PokemonCard';
import useGetPokemonList from '../../hooks/fetch/useGetPokemonList';
import {FlatList, RefreshControl, Text, View} from 'react-native';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const {isLoading, pokemonList, refresh} = useGetPokemonList(searchQuery);

  return (
    <SafeAreaView>
      <SearchBox search={searchQuery} setSearch={setSearchQuery} />
      <FlatList
        className="h-full"
        contentContainerStyle={{
          paddingTop: 15,
          paddingBottom: 180,
        }}
        data={pokemonList}
        renderItem={({item}) => <PokemonCard item={item} />}
        keyExtractor={(item: any) => item.name}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refresh}
            colors={['rgb(29 78 216)']}
          />
        }
        ListEmptyComponent={
          <View className="p-5">
            <Text className="text-2xl font-semibold text-slate-800 text-center mb-2">
              Oops! Try Again.
            </Text>
            <Text className="text-base text-slate-500 text-center">
              The pokemon you're looking does not exist in this list.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
