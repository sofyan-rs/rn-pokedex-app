/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LayoutWithTopBar from '../../components/Layout/LayoutWithTopBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation.type';
import {getPokemonIndex} from '../../lib/utils/getPokemonIndex';
import BadgePokemonType from '../../components/UI/Badge/BadgePokemonType';
import {HeartIcon} from 'lucide-react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonDetail'>;

export default function PokemonDetailScreen({route}: Props) {
  const {data} = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView>
      <LayoutWithTopBar title="Detail Pokemon">
        <ScrollView>
          <View className="bg-white p-5">
            <View className="flex-row items-center justify-between gap-5">
              <View>
                <Text className="text-slate-500 text-base">
                  #{getPokemonIndex(data.id, 3)}
                </Text>
                <Text className="text-2xl text-blue-700 font-semibold capitalize">
                  {data.name}
                </Text>
                <View className="flex-row gap-x-1 mt-2">
                  {data.types.map((type: any) => (
                    <View key={type.type.name}>
                      <BadgePokemonType type={type.type.name} />
                    </View>
                  ))}
                </View>
              </View>
              <TouchableOpacity
                className="bg-slate-100 p-3 rounded-full"
                onPress={() => setIsFavorite(!isFavorite)}>
                <HeartIcon
                  fill={isFavorite ? '#ef4444' : '#f1f5f9'}
                  className="text-red-500"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: data.sprites.other.home.front_default,
              }}
              style={{width: Dimensions.get('window').width - 40, height: 300}}
              className="bg-slate-100 object-contain my-5"
            />
          </View>
        </ScrollView>
      </LayoutWithTopBar>
    </SafeAreaView>
  );
}
