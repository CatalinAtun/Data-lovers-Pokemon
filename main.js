// addEventListener click para todos los botones de tipos de pokemon
let data = window.POKEMON.pokemon; // con window. no se visualiza la información
let modifiedData = data;
function globalFilter (condition) {
    document.getElementById(condition).addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
        let filter = window.pokemons.filterData(data, condition);
		// guardamos los pokemones filtrados por tipo actuales en modifiedData
		modifiedData = filter;
        for (let i = 0; i < filter.length; i++){
            document.getElementById("root").innerHTML += pokemonBox(filter[i].name, filter[i].num, filter[i].type, filter[i].img);
            document.getElementById("name-type").innerHTML = document.getElementById(condition).value;
        }
    })
}
function pokemon(){
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < data.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(data[i].name, data[i].num, data[i].type, data[i].img);
    }
}

//hacemos el llenado de todos los pokemones sin filtrar y sin ordenar con pokemon() y se l edice que en el click en el tipo TODOS tambien lo haga.
document.getElementById("everyone").onclick = pokemon;
pokemon();

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
function fillWithPokemons (pokemones){
	document.getElementById("root").innerHTML = "";
    for (let i = 0; i < pokemones.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(pokemones[i].name, pokemones[i].num, pokemones[i].type, pokemones[i].img);
    }
}

//document.getElementById("select").onclick = pokemonWeightIMC;

let selectSort = document.getElementById("select");
// listener change se ejecuta cada vez que se cambia la opcion del select, con esto cada vez que se cambie aplicamos el orden
selectSort.addEventListener("change", function(condition){
	let valueSelect = selectSort.value;
<<<<<<< HEAD
	let pokemonsOrdered = modifiedData;

=======
	let orderedPokemons = modifiedData;
>>>>>>> a87915caf96ab70d1fee2b0f97a9273ebed8a184
	if(valueSelect === 'aZOrder'){
		orderedPokemons = window.pokemons.sortData(modifiedData, 'name', true); // currentPokemon es el array de pokemones actuales que se ven, 'name' corresponde a que propiedad del objeto queremos ordener, true corresponde a si es ascendente(true) o descendente(false)
	}else if(valueSelect === 'zAOrder'){
		orderedPokemons = window.pokemons.sortData(modifiedData, 'name', false);
	}
	//console.log(valueSelect, orderedPokemons, modifiedData);
	fillWithPokemons(orderedPokemons);
});


// globalfilter para taodos los botones de tipos
let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];

for (let i = 0; i < buttonArray.length; i++){
    globalFilter(buttonArray[i]);
}