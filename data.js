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
   let grass_pokemon = [];
   for (let i = 0; i < POKEMON.pokemon.length; i++){
       for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
           if(POKEMON.pokemon[i].type[e] === "Grass")
               grass_pokemon.push(POKEMON.pokemon[i]);
       }
   }
   return grass_pokemon;
}

function poisonFilter () {
  let poison_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Poison")
              poison_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return poison_pokemon;
}

function flyingFilter () {
  let flying_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Flying")
              flying_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return flying_pokemon;
}

function fireFilter () {
  var fire_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Fire")
              fire_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return fire_pokemon;
}

function waterFilter () {
  let water_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Water")
              water_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return water_pokemon;
}

function bugFilter () {
  let bug_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Bug")
              bug_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return bug_pokemon;
}

function normalFilter () {
  let normal_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Normal")
              normal_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return normal_pokemon;
}

function electricFilter () {
  let electric_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Electric")
              electric_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return electric_pokemon;
}

function groundFilter () {
  let ground_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Ground")
              ground_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return ground_pokemon;
}

function fightingFilter () {
  let fighting_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Fighting")
              fighting_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return fighting_pokemon;
}

function psychicFilter () {
  let psychic_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Psychic")
              psychic_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return psychic_pokemon;
}

function rockFilter () {
  let rock_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Rock")
              rock_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return rock_pokemon;
}

function iceFilter () {
  let ice_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Ice")
              ice_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return ice_pokemon;
}

function ghostFilter () {
    var ghost_pokemon = [];
    for (let i = 0; i < POKEMON.pokemon.length; i++){
        for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
            if(POKEMON.pokemon[i].type[e] === "Ghost")
                ghost_pokemon.push(POKEMON.pokemon[i]);
        }
    }
    return ghost_pokemon;
}

function dragonFilter () {
  let dragon_pokemon = [];
  for (let i = 0; i < POKEMON.pokemon.length; i++){
      for (let e = 0; e < POKEMON.pokemon[i].type.length; e++) {
          if(POKEMON.pokemon[i].type[e] === "Dragon")
              dragon_pokemon.push(POKEMON.pokemon[i]);
      }
  }
  return dragon_pokemon;
}
