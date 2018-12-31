window.onload = function () {
    // principal screen with all pokémon
    document.getElementById("root").innerHTML = pokemonNames();
    // filter buttons, 15 categories
    /*document.getElementById("grassButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = grassFilter();
    });
    document.getElementById("poisonButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = poisonFilter();
    });
    document.getElementById("fireButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = fireFilter();
    });
    document.getElementById("flyingButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = flyingFilter();
    });
    document.getElementById("waterButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = waterFilter();
    });
    document.getElementById("bugButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = bugFilter();
    });
    document.getElementById("normalButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = normalFilter();
    });
    document.getElementById("electricButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = electricFilter();
    });
    document.getElementById("groundButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = groundFilter();
    });
    document.getElementById("fightingButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = fightingFilter();
    });
    document.getElementById("psychicButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = psychicFilter();
    });
    document.getElementById("rockButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = rockFilter();
    });
    document.getElementById("iceButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = iceFilter();
    });
    document.getElementById("ghostButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = ghostFilter();
    });
    document.getElementById("dragonButton").addEventListener("click", function(){
        document.getElementById("root").innerHTML = dragonFilter();
    });*/
};

// function myFunction() {
//    document.getElementById("root").innerHTML = grassFilter();
//}

// esta función es para obtener el nombre de los pokemones filtrados.
function pokemonNamesFilter (pokemons) {
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < pokemons.length; i++){
        document.getElementById("root").innerHTML += pokemons[i].name + " ";
    }
}
// querySelector trae el primer elemento segun el selector css ej: .estoesunaclase #estoesunid
// esta función india que es lo que se hace al hacer click en un boton de tipos de pokemon.
document.querySelectorAll(".enlace").forEach(function(button){
    button.addEventListener("click", function(){
        switch (button.value) {
            case "Planta":
                var grassPokemon = grassFilter();
                pokemonNamesFilter(grassPokemon);
                break;
            case "Veneno":
                document.getElementById("root").innerHTML = poisonFilter();
                break;
            case "Volador":
                document.getElementById("root").innerHTML = flyingFilter();
                break;
            case "Fantasma":
                var ghostPokemon = ghostFilter();
                pokemonNamesFilter(ghostPokemon);
                break;
            default:
                break;
        };
        //document.getElementById("root").innerHTML = dragonFilter();
    });
})
