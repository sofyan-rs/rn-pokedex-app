export function getPokemonIndex(id: string, length: number) {
  var str = '' + id;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}
