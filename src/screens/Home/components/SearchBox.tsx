/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AlignLeftIcon, SearchIcon} from 'lucide-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation.type';
import {DrawerActions, useNavigation} from '@react-navigation/native';

interface ISearchBox {
  search: string;
  setSearch: (text: string) => void;
}

export default function SearchBox({search, setSearch}: ISearchBox) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  return (
    <View className="bg-blue-700 py-5" style={{elevation: 10}}>
      <View className="flex-row items-center px-2 mb-5">
        <TouchableHighlight
          className="p-2.5 rounded-full mr-1"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          underlayColor={'#2563eb'}>
          <AlignLeftIcon className="text-white" />
        </TouchableHighlight>
        <Text className="text-white font-semibold text-2xl">
          Who are you looking for?
        </Text>
      </View>
      <View className="relative flex-row items-center mx-5">
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
