var pokemon = [];

function Pokemon(nombre, color, poderDeAtaque, vida){
	this.nombre = nombre;
	this.color = color;
	this.poderDeAtaque = poderDeAtaque;
	this.nivelDeAmistad = 0;
	this.vida = vida;

	this.mostrarPokemon = function(){
		return "Hola soy " + this.nombre + " y soy de color " + this.color;
	};

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad += valor;
	};

	this.atacar = function(pokemon){
		pokemon.vida -= this.poderDeAtaque;
	}

}

function principal(){
	

	var pikachu = new Pokemon("Pikachu", "amarillo", 30, 60);
	var charmander = new Pokemon("Charmander", "naranja", 30, 50);
	var squirtle = new Pokemon("Squirtle", "azul", 20, 50);
	var bulbasaur = new Pokemon("Bulbasaur", "verde", 20, 50 );
	pokemon.push(pikachu);
	pokemon.push(charmander);
	pokemon.push(squirtle);
	pokemon.push(bulbasaur);

	llenarSelect("pokemon1", pokemon);
	llenarSelect("pokemon2", pokemon);
}

function llenarSelect(idSelect, arrayPokemon){
	var select = document.getElementById(idSelect);
	var opAux;
	arrayPokemon.forEach(function(elemento){
		opAux = document.createElement("option");
		opAux.innerHTML =  elemento.nombre;
		select.appendChild(opAux);
	}); 
}

function pelear(){
	var pok1 = document.getElementById("pokemon1").value;
	var pok2 = document.getElementById("pokemon2").value;
	var res = document.getElementById("resultados");
	
	var pokemon1 = pokemon.filter(function(el){
		return el.nombre == pok1;
	})[0];
	var pokemon2 = pokemon.filter(function(el){
		return el.nombre == pok2;
	})[0];

	if(pokemon1 === pokemon2){
		alert("Escoja dos pokemon diferentes");
	}else if(pokemon2.vida <= 0){
		alert(pokemon2.nombre + " no se puede atacar");
	}else{
		pokemon1.atacar(pokemon2);
		res.innerHTML = pokemon1.nombre + " atacó a " + pokemon2.nombre + " y " + pokemon2.nombre + " tiene una vida de " + pokemon2.vida;
	}
}
principal();