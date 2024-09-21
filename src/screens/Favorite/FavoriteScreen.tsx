/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import LayoutWithTopBar from '../../components/Layout/LayoutWithTopBar';
import PokemonCard from '../Home/components/PokemonCard';
import {useFavorites} from '../../hooks/zustand/useFavorites';

export default function FavoriteScreen() {
  const {favorites} = useFavorites();

  return (
    <View>
      <LayoutWithTopBar title="Favorite">
        <FlatList
          className="h-full"
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: 140,
          }}
          data={favorites}
          renderItem={({item}) => <PokemonCard item={item} />}
          keyExtractor={(item: any) => item.name}
          ListEmptyComponent={
            <View className="p-5">
              <Text className="text-2xl font-semibold text-slate-800 text-center mb-2">
                Its Empty!
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
