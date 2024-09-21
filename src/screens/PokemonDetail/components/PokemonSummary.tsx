import {View, Text} from 'react-native';
import React from 'react';

export default function PokemonSummary({data}: any) {
  return (
    <View>
      <Text className="text-slate-800 font-semibold text-xl">Information</Text>
      <View className="border-b-2 border-dashed border-slate-200 pb-5 mb-5">
        <View className="flex-row gap-x-10 mt-3">
          <View>
            <Text className="text-slate-500 mb-1">Height</Text>
            <View className="flex-row gap-x-5">
              <Text className="text-lg text-blue-700 font-semibold">
                {(data.height * 0.32808)
                  .toFixed(2)
                  .toString()
                  .replace('.', "'")}
                "
              </Text>
              <Text className="text-lg text-blue-700 font-semibold">
                {data.height / 10} m
              </Text>
            </View>
          </View>
          <View>
            <Text className="text-slate-500 mb-1">Weight</Text>
            <View className="flex-row gap-x-5">
              <Text className="text-lg text-blue-700 font-semibold">
                {(data.weight * 0.22046).toFixed(2)} lbs
              </Text>
              <Text className="text-lg text-blue-700 font-semibold">
                {data.weight / 10} kg
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
