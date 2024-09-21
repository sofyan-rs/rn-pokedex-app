/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface ILayoutWithTopBar {
  title: string;
  children: React.ReactNode;
}

export default function LayoutWithTopBar({title, children}: ILayoutWithTopBar) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <View
        className="bg-blue-700 p-3 flex-row items-center gap-x-2 shadow-slate-500"
        style={{elevation: 10}}>
        <TouchableHighlight
          className="p-2.5 rounded-full"
          onPress={() => navigation.goBack()}
          underlayColor={'#2563eb'}>
          <ArrowLeftIcon className="text-white" />
        </TouchableHighlight>
        <Text className="text-base font-semibold text-white">{title}</Text>
      </View>
      {children}
    </View>
  );
}
