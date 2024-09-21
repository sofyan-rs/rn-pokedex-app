/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchIcon} from 'lucide-react-native';

interface ISearchBox {
  search: string;
  setSearch: (text: string) => void;
}

export default function SearchBox({search, setSearch}: ISearchBox) {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  return (
    <View className="bg-blue-700 px-5 py-8" style={{elevation: 10}}>
      <Text className="text-white font-semibold text-2xl mb-5">
        Who are you looking for?
      </Text>
      <View className="relative flex-row items-center">
        <SearchIcon
          className="text-slate-600 absolute left-2 z-[999]"
          size={24}
        />
        <TextInput
          className="flex-1 bg-white pl-10 pr-5 py-2 rounded-full"
          placeholder="E.g. Pikachu"
          onChangeText={text => setSearchInput(text)}
          value={searchInput}
        />
        <TouchableOpacity
          className="absolute right-1 bg-slate-700 px-5 py-2 rounded-full ml-2"
          onPress={() => setSearch(searchInput)}>
          <Text className="text-white">GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
