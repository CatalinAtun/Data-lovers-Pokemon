//aquí van las funciones
let data = POKEMON.pokemon; // con window. no se visualiza la información
function filterData(data, condition){
    let filtered = [];
    for (let i = 0; i < data.length; i++){
        for (let e = 0; e < data[i].type.length; e++){
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
    <img class="img-fluid" src="${image}"alt="${name}">
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
function formatTypes (types)
{
    let typesHtml = "";
    for (let i = 0; i < types.length; i++){
        //span sirve para aplicar estilo a un texto https://developer.mozilla.org/es/docs/Web/HTML/Elemento/span, hace que quede al lado los elementos
        typesHtml += `<div class="tag-type bg-${types[i].toLowerCase()}">${types[i]}</div>`;
    }
    return typesHtml;
}
function sortData (data, sortBy, sortOrder){
    const dataPokemon = data
    if (sortBy === "name" && sortOrder === "az"){
        dataPokemon.sort((prev, next)=>{
            if (prev.name > next.name){
                return 1;
            }
            if (prev.name < next.name){
                return -1;
            }
            return 0;
        })
    }
}
if (sortBy === "name" && sortOrder === "za"){
    dataPokemon.sort((prev, next)=>{
        if (prev.name < next.name){
            return 1;
        }
        if (prev.name > next.name){
            return -1;
        }
        return 0;
    })
}
console.log(dataPokemon);
let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];