// addEventListener click para todos los botones de tipos de pokemon
function globalFilter (condition) {
    document.getElementById(condition).addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
        let filter = window.filterData(data, condition);
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

let selectSort = document.getElementById("select");
// listener change se ejecuta cada vez que se cambia la opcion del select, con esto cada vez que se cambie aplicamos el orden
selectSort.addEventListener("change", function(condition){
	let valueSelect = selectSort.value;
	let pokemonsOrdered = modifiedData;

	if(valueSelect === 'aZOrder'){
		pokemonsOrdered = sortData(modifiedData, 'name', true); // currentPokemon es el array de pokemones actuales que se ven, 'name' corresponde a que propiedad del objeto queremos ordener, true corresponde a si es ascendente(true) o descendente(false)
	}else if(valueSelect === 'zAOrder'){
		pokemonsOrdered = sortData(modifiedData, 'name', false);
	}
	//console.log(valueSelect, pokemonsOrdered, modifiedData);
	fillWithPokemons(pokemonsOrdered);
});


// globalfilter para taodos los botones de tipos
let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];
for (let i = 0; i < buttonArray.length; i++){
    globalFilter(buttonArray[i]);
}
