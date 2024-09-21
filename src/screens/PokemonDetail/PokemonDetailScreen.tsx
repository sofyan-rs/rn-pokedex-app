/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LayoutWithTopBar from '../../components/Layout/LayoutWithTopBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation.type';
import PokemonSummary from './components/PokemonSummary';
import PokemonInfo from './components/PokemonInfo';
import PokemonStats from './components/PokemonStats';

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonDetail'>;

export default function PokemonDetailScreen({route}: Props) {
  const {name, url, data} = route.params;

  return (
    <SafeAreaView>
      <LayoutWithTopBar title="Detail Pokemon">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 140,
          }}
          showsHorizontalScrollIndicator={false}>
          <View className="bg-white p-5">
            <PokemonInfo name={name} url={url} data={data} />
            <PokemonSummary data={data} />
            <PokemonStats data={data} />
          </View>
        </ScrollView>
      </LayoutWithTopBar>
    </SafeAreaView>
  );
}
