//aquí van las funciones

// window.example = example;

// console.log(POKEMON.pokemon[0]); muestra lo que contiene la posición 0 del array
/* let result = [];
function pokemonNames () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    result.push(POKEMON.pokemon[i].name);
  }
  return (result)
}

function pokemonImages () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    result.push(POKEMON.pokemon[i].images);
  }
  return (result)
} */

let data = POKEMON.pokemon;
function dataFilter (data, condition) {
  let filtered = [];
  for (let i = 0; i < data.length; i++){
      for (let e = 0; e < data[i]["type"].length; e++) {
          if(data[i].type[e] === condition){
              filtered.push(data[i]);
          }
      }
  }
  return filtered;
}


