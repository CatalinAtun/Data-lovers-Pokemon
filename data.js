//aquí van las funciones de filtrados

// Esta funcion filtra todos los pokemones por el tipo
function filterByType(allPokemon, condition) {
    let filtered = [];
    for (let i = 0; i < allPokemon.length; i++){
        for (let e = 0; e < allPokemon[i].type.length; e++) {
            if(allPokemon[i].type[e] === condition){
                filtered.push(allPokemon[i]);
            }
        }
    }
    return filtered;
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
