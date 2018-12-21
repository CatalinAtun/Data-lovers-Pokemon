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

function pokemonImages () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    result.push(POKEMON.pokemon[i].images);   
  } 
  return (result)
}

function grassFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Grass" || POKEMON.pokemon[i].type[1] === "Grass" || POKEMON.pokemon[i].type[2] === "Grass") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function poisonFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Poison" || POKEMON.pokemon[i].type[1] === "Poison" || POKEMON.pokemon[i].type[2] === "Poison") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function fireFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Fire" || POKEMON.pokemon[i].type[1] === "Fire" || POKEMON.pokemon[i].type[2] === "Fire") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function flyingFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Flying" || POKEMON.pokemon[i].type[1] === "Flying" || POKEMON.pokemon[i].type[2] === "Flying") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function waterFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Water" || POKEMON.pokemon[i].type[1] === "Water" || POKEMON.pokemon[i].type[2] === "Water") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function bugFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Bug" || POKEMON.pokemon[i].type[1] === "Bug" || POKEMON.pokemon[i].type[2] === "Bug") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function normalFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Normal" || POKEMON.pokemon[i].type[1] === "Normal" || POKEMON.pokemon[i].type[2] === "Normal") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function electricFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Electric" || POKEMON.pokemon[i].type[1] === "Electric" || POKEMON.pokemon[i].type[2] === "Electric") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function groundFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Ground" || POKEMON.pokemon[i].type[1] === "Ground" || POKEMON.pokemon[i].type[2] === "Ground") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function fightingFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Fighting" || POKEMON.pokemon[i].type[1] === "Fighting" || POKEMON.pokemon[i].type[2] === "Fighting") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function psychicFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Psychic" || POKEMON.pokemon[i].type[1] === "Psychic" || POKEMON.pokemon[i].type[2] === "Psychic") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function rockFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Rock" || POKEMON.pokemon[i].type[1] === "Rock" || POKEMON.pokemon[i].type[2] === "Rock") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function iceFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Ice" || POKEMON.pokemon[i].type[1] === "Ice" || POKEMON.pokemon[i].type[2] === "Ice") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function ghostFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Ghost" || POKEMON.pokemon[i].type[1] === "Ghost" || POKEMON.pokemon[i].type[2] === "Ghost") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}

function dragonFilter () {
  for (let i = 0; i < POKEMON.pokemon.length; i++){
    if (POKEMON.pokemon[i].type[0] === "Dragon" || POKEMON.pokemon[i].type[1] === "Dragon" || POKEMON.pokemon[i].type[2] === "Dragon") { 
      result.push(POKEMON.pokemon[i])
    } 
  }
  return (result);
}




