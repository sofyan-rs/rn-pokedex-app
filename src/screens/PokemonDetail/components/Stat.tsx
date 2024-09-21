import {View, Text} from 'react-native';
import React from 'react';

interface IStat {
  name: string;
  value: number;
  bg: string;
}

export default function Stat({name, value, bg}: IStat) {
  const persentage = (value / 255) * 100;

  return (
    <View className="mb-2">
      <Text className="text-slate-500 mb-2 font-medium text-base">{name}</Text>
      <View className="bg-slate-100 h-3 w-full rounded-full">
        <View
          className={`${bg} h-3 rounded-full`}
          style={{width: `${persentage}%`}}
        />
      </View>
    </View>
  );
}
