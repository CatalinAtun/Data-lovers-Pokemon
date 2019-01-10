// Aca van las funciones que trabajan con el DOM
const allPokemon = window.POKEMON.pokemon; // ESTA VARIABLE CONTENDRÁ TODOS LOS POKEMON SIN FILTRAR NI ORDENAR NI MODIFICADOS.
let currentPokemon = allPokemon; // ESTA VARIABLE CONTENDRÁ TODOS LOS POKEMON QUE SE ESTAN VIENDO AL MOMENTO DE FILTRAR U ORDENAR O REALIZAR CUALQUIER MODIFICACIÓN A TODOS LOS POKEMON. SE INICIALIZA CON TODOS LOS POKEMON.

//armar caja de pokemones según los boostrap card https://getbootstrap.com/docs/4.2/components/card/
let pokemonBox = (name, number, type, image) => {
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
let formatTypes = (types) => {
    let typesHtml = "";
    for (let i = 0; i < types.length; i++){
        //span sirve para aplicar estilo a un texto https://developer.mozilla.org/es/docs/Web/HTML/Elemento/span, hace que quede al lado los elementos
        typesHtml += `<div class="tag-type bg-${types[i].toLowerCase()}">${types[i]}</div>`;
    }
    return typesHtml;
}

// simplemente le pasas un array de pokemones y llena con html de las cajas con la funcion pokemonBox
let fillWithPokemons = (pokemons) => {
    // Limpiamos el html que haya dentro del div con id root. esto se hace para poder mostrar los nuevos pokemones.
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < pokemons.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(pokemons[i].name, pokemons[i].num, pokemons[i].type, pokemons[i].img);
    }
}

// addEventListener click para todos los botones de tipos de pokemon
let clicksButtonType = (idTypePokemon) => {
    // querySelectorAll trae un array de todos los elementos con el id que se le indique para poder recorer con un for despues
    let buttonType = document.querySelectorAll("#"+idTypePokemon);
    for (var i = 0; i < buttonType.length; i++) {
        buttonType[i].addEventListener("click", () => {
            // llamamos a la funcion window.pokemons.filterByType que hace el trabajo de filtrarlos por tipo, pasandole a la funcion las variables allPokemon, que son todos los pokemones. Y idTypePokemon que es el tipo de pokemon (el id del boton).
            // Guardamos lo que nos devuelve la funcion window.pokemons.filterByType en la variable currentPokemon (global) que contiene los pokemones filtrados u ordenados.
            currentPokemon = window.window.pokemons.filterByType(allPokemon, idTypePokemon);

            // Actualizamos el titulo del tipo de pokemon que estamos viendo o que vamos a ver.
            document.getElementById("name-type").innerHTML = document.getElementById(idTypePokemon).value;

            // Llamamos a la funcion fillWithPokemons y le pasamos currentPokemon que contiene los pokemones filtrados arriba.
            fillWithPokemons(currentPokemon);
        })
    }

}
// Se ejecuta clicksButtonType por cada uno de los tipos de pokemon (con un for) que en este caso estan como button.
let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];
for (let i = 0; i < buttonArray.length; i++){
    clicksButtonType(buttonArray[i]);
}

// cuando se hace click en el boton Ver Todos, se ejecuta la funcion fillWithPokemons pasandole la variable allPokemon que contiene todos los pokemones
let buttonEveryone = document.querySelectorAll("#everyone");
for (var i = 0; i < buttonEveryone.length; i++) {

buttonEveryone[i].addEventListener('click', () => {
    // Actualizamos el titulo colocandole el string Todos los Pokemón.
    document.getElementById("name-type").innerHTML = "Todos los pokemón";
    // Se ejecuta fillWithPokemons pasandole la variable con todos los pokemones sin filtrar ni ordenar.
    fillWithPokemons(allPokemon);
    // Debemos decirle que nuevamente los pokemones que estamos viendo son todos.
    currentPokemon = allPokemon;
    });
    }
// se ejecuta fillWithPokemons en la primera carga del codigo pasandole la variable allPokemon que contiene todos los pokemones.
fillWithPokemons(allPokemon);

// Guardamos el elemento select que contiene las opciones de orden para los pokemon en la variable selectSort
let selectSort = document.getElementById("select");
// listener o evento change se ejecuta cada vez que se cambia la opcion del select, con esto cada vez que se cambie aplicamos un orden
selectSort.addEventListener("change", () => {
    // Guardamos el valor de la opcion seleccionada en la variable valueSelect.
    let valueSelect = selectSort.value;

    // Creamos la variable pokemonsOrdered que contendrá los pokemones ordenados, se hace esto para no interferir en la posicion inicial de los pokemones ya filtrados en caso de que se quiera quitar el orden.
	let pokemonsOrdered = [];

    // Si el valor de la opcion seleccionada es aZOrder entonces debemos ordenar de forma ascendente
	if(valueSelect === 'aZOrder'){
         // Se ejecuta la funcion sortOrder que ordena los pokemones que estan en la variable currentPokemon segun el nombre ('name') y deforma ascendente (true)
		pokemonsOrdered = window.pokemons.sortData(currentPokemon, 'name', true);
    // Si el valor de la opcion seleccionada es zAOrder entonces debemos ordenar de forma descendente
    }else if(valueSelect === 'zAOrder'){
        // Se ejecuta la funcion sortOrder que ordena los pokemones que estan en la variable currentPokemon segun el nombre ('name') y deforma descendente (false)
       pokemonsOrdered = window.pokemons.sortData(currentPokemon, 'name', false);
    // Si el valor de la opcion no es ninguna de las anteriores, entonces le decimos que los pokemones vuelvan o se mantengan en su posicion inicial.
    }else{
        pokemonsOrdered = currentPokemon;
    }
    // Se ejecuta fillWithPokemons pasandole pokemonsOrdered que contiene los pokemones ordenados.
	fillWithPokemons(pokemonsOrdered);
});
