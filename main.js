function pokemon(){
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < data.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(data[i].name, data[i].num, data[i].type, data[i].img);
    }
}
window.pokemon();

function globalFilter (condition) {
    document.getElementById(condition).addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
        let filter = window.filterData(data, condition);
        for (let i = 0; i < filter.length; i++){
            document.getElementById("root").innerHTML += pokemonBox(filter[i].name, filter[i].num, filter[i].type, filter[i].img);
        }
    })
}
//armar caja de pokemones según los boostrap card https://getbootstrap.com/docs/4.2/components/card/
function pokemonBox (name, number, type, image){
    let typesFormated = formatTypes (type);
    return `<div class="col-3">
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
        typesHtml += `<span class="tag-type bg-${types[i].toLowerCase()}">${types[i]}</span>`;
    }
    return typesHtml;
}

let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];

for (let i = 0; i < buttonArray.length; i++){
    globalFilter(buttonArray[i]);
}
