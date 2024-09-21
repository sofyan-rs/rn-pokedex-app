/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          grass: '#16C172',
          fire: '#FB9B51',
          water: '#4A90DD',
          poison: '#A864C7',
          bug: '#92BC2C',
          normal: '#9298A4',
          fighting: '#CE4265',
          flying: '#90A7DA',
          ground: '#DC7545',
          rock: '#C5B489',
          ghost: '#516AAC',
          steel: '#52869D',
          electric: '#EDD53E',
          psychic: '#F66F71',
          ice: '#70CCBD',
          dragon: '#0C69C8',
          dark: '#595761',
          fairy: '#EC8CE5',
        },
      },
    },
  },
  plugins: [],
};
