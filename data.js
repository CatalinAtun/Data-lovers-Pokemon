//aquí van las funciones de filtrados
window.pokemons = {
    // Esta funcion filtra todos los pokemones por el tipo
    filterByType: (allPokemon, condition) => {
        let filtered = [];
        for (let i = 0; i < allPokemon.length; i++){
            for (let e = 0; e < allPokemon[i].type.length; e++) {
                if(allPokemon[i].type[e] === condition){
                    filtered.push(allPokemon[i]);
                }
            }
        }
        return filtered;
    },

    computeStats: (data, filterByType) => {
      return(filterByType.length*100/data.length).toFixed(2);
    },
     
    //sirve para ordenar. dataPokemon = los pokemones que quieres ordenar, sortBy puede ser 'name' actualmente, sortOrder puede ser true o false donde true es ascendente y false es descendente
    sortData: (dataPokemon, sortBy, sortOrder) => {
        /* lo siguiente ordena según el nombre, dividiendose en ascendente(true) y descendente(false) */
        if (sortBy === 'name') {
            // ordena de forma ascendente
            if (sortOrder === true){
                //aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden.  El sort hace el trabajo de filtrar ascendente o descendente
                return dataPokemon.slice().sort((a, b) => {
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
                return dataPokemon.slice().sort((a, b) => {
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
  }