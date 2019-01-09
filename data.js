//aquí van las funciones

let data = POKEMON.pokemon; // con window. no se visualiza la información
let modifiedData = data; // esta variable se utilizara de forma global para cuando tengamos pokemones filtrados u ordenados se guarden aqui y se pueda utilizar en todos los sitios (seran los pokemones que se ven en el momento en la pagina). En un comienzo se ven todos por eso le seteamos que sea igual a data.

function filterData(data, condition) {
    let filtered = [];
    for (let i = 0; i < data.length; i++){
        for (let e = 0; e < data[i].type.length; e++) {
            if(data[i].type[e] === condition){
                filtered.push(data[i]);
            }
        }
    }
    return filtered;
  }

//armar caja de pokemones según los boostrap card https://getbootstrap.com/docs/4.2/components/card/
function pokemonBox (name, number, type, image){
    let typesFormated = formatTypes (type);
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="card w-100 pokemon-box">
    <div  class="card-img-top">
    <img class="img-fluid" src="${image}" alt="${name}">
    </div>
    <div class="card-body">
    <p class="card-text">#${number}</p>
    <p class="card-text">${name}</p>
    <p class="card-text">${typesFormated}</p>
    </div>
    </div>
    </div>`;
}

//Se crea una función formaType que separa los tipos por la coma y los convierte en array y esto lo hace el split y esto hace que sean elementos independientes
function formatTypes (types){
    let typesHtml = "";
    for (let i = 0; i < types.length; i++){
        //span sirve para aplicar estilo a un texto https://developer.mozilla.org/es/docs/Web/HTML/Elemento/span, hace que quede al lado los elementos
        typesHtml += `<div class="tag-type bg-${types[i].toLowerCase()}">${types[i]}</div>`;
    }
    return typesHtml;
}

// simplemente le pasas un array de pokemones y llena con html de las cajas con la funcion pokemonBox
function fillWithPokemons (pokemons){
	document.getElementById("root").innerHTML = "";
    for (let i = 0; i < pokemons.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(pokemons[i].name, pokemons[i].num, pokemons[i].type, pokemons[i].img);
    }
}

//sirve para ordenar. dataPokemon = los pokemones que quieres ordenar, sortBy puede ser 'name' actualmente, sortOrder puede ser true o false donde true es ascendente y false es descendente
function sortData (dataPokemon, sortBy, sortOrder){
  /* lo siguiente ordena según el nombre, dividiendose en ascendente(true) y descendente(false) */
  if (sortBy === 'name') {
	// ordena de forma ascendente
    if (sortOrder === true){
		//aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden.  El sort hace el trabajo de filtrar ascendente o descendente
      return dataPokemon.slice().sort(function(a, b){
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        if (x < y) {
          return -1;
        } if (x > y) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortOrder == false){ // ordena de forma descendente
		//aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden. El sort hace el trabajo de filtrar ascendente o descendente
      return dataPokemon.slice().sort(function(a, b){
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        if (x < y) {
          return 1;
        } if (x > y) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }
}

