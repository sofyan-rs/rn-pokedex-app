import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Font size
export const fontSize = {
  xs: {
    fontSize: width > 350 ? 12 : 10,
    lineHeight: width > 350 ? 16 : 14,
  },
  sm: {
    fontSize: width > 350 ? 14 : 12,
    lineHeight: width > 350 ? 20 : 18,
  },
  base: {
    fontSize: width > 350 ? 16 : 14,
    lineHeight: width > 350 ? 24 : 20,
  },
  lg: {
    fontSize: width > 350 ? 18 : 16,
    lineHeight: width > 350 ? 28 : 24,
  },
  xl: {
    fontSize: width > 350 ? 20 : 18,
    lineHeight: width > 350 ? 30 : 26,
  },
  '2xl': {
    fontSize: width > 350 ? 24 : 20,
    lineHeight: width > 350 ? 32 : 28,
  },
  '3xl': {
    fontSize: width > 350 ? 30 : 24,
    lineHeight: width > 350 ? 40 : 32,
  },
  '4xl': {
    fontSize: width > 350 ? 36 : 30,
    lineHeight: width > 350 ? 48 : 40,
  },
  '5xl': {
    fontSize: width > 350 ? 48 : 36,
    lineHeight: width > 350 ? 64 : 48,
  },
  '6xl': {
    fontSize: width > 350 ? 60 : 48,
    lineHeight: width > 350 ? 80 : 64,
  },
  '7xl': {
    fontSize: width > 350 ? 72 : 60,
    lineHeight: width > 350 ? 96 : 80,
  },
  '8xl': {
    fontSize: width > 350 ? 96 : 72,
    lineHeight: width > 350 ? 128 : 96,
  },
  '9xl': {
    fontSize: width > 350 ? 128 : 96,
    lineHeight: width > 350 ? 160 : 128,
  },
};
