window.onload = function () {

function globalFilter (condition) { 
    document.getElementById(condition).addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
         let filter = dataFilter(data, condition);
        for (let i = 0; i < filter.length; i++){
            document.getElementById("root").innerHTML += filter[i].name + " " + filter[i].id + " " + '<img id="img" src="'+filter[i].img+'"/>';
    }
})
}

let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];

for (let i = 0; i < buttonArray.length; i++){
    globalFilter(buttonArray[i]);
}


};