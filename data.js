//aquí van las funciones

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


// const example = () => {
//   return 'example';
// };

// window.example = example;

// console.log(POKEMON.pokemon[0]); muestra lo que contiene la posición 0 del array

let result = [];
function pokemonNames () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    result.push(POKEMON.pokemon[i].name);   
  } 
  return (result)
}
// console.log(pokemonNames());

function grassFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Grass" || POKEMON.pokemon[i].type[1] === "Grass" || POKEMON.pokemon[i].type[2] === "Grass") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}





