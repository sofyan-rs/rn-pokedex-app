import {View, Text} from 'react-native';
import React from 'react';
import Stat from './Stat';

export default function PokemonStats({data}: any) {
  return (
    <View>
      <Text className="text-slate-800 font-semibold text-xl mb-3">Stats</Text>
      <Stat name="HP" bg="bg-green-500" value={data.stats[0].base_stat} />
      <Stat name="Attack" bg="bg-red-500" value={data.stats[1].base_stat} />
      <Stat name="Defense" bg="bg-yellow-500" value={data.stats[2].base_stat} />
      <Stat name="Speed" bg="bg-orange-500" value={data.stats[5].base_stat} />
      <Stat
        name="Special Attack"
        bg="bg-pink-500"
        value={data.stats[3].base_stat}
      />
      <Stat
        name="Special Defense"
        bg="bg-blue-500"
        value={data.stats[4].base_stat}
      />
    </View>
  );
}
