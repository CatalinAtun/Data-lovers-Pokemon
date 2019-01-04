//aquí van las funciones

let data = POKEMON.pokemon; // con window. no se visualiza la información en
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
