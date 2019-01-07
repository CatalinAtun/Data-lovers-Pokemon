function globalFilter (condition) {
    document.getElementById(condition).addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
        let filter = window.filterData(data, condition);
        for (let i = 0; i < filter.length; i++){
            document.getElementById("root").innerHTML += pokemonBox(filter[i].name, filter[i].num, filter[i].type, filter[i].img);
            document.getElementById("name-type").innerHTML = condition;
        }
    })
}
function pokemon(){
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < data.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(data[i].name, data[i].num, data[i].type, data[i].img);
    }
}

document.getElementById("everyone").onclick = pokemon;
pokemon();

for (let i = 0; i < buttonArray.length; i++){
    globalFilter(buttonArray[i]);
}