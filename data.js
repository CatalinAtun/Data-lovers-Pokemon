//aquí van las funciones

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


// const example = () => {
//   return 'example';
// };

// window.example = example;

// console.log(POKEMON.pokemon[0]); muestra lo que contiene la posición 0 del array

let resultado = [];
for (let i = 0; i < POKEMON.pokemon.length; i++){

  resultado.push(POKEMON.pokemon[i].name);
} 
console.log(resultado);

