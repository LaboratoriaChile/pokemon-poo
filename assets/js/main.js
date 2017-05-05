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

var pikachu = new Pokemon("Pikachu", "amarillo", 30, 60);
var charmander = new Pokemon("Charmander", "naranja", 30, 50);

console.log("La vida de Charmander es: " + charmander.vida);
pikachu.atacar(charmander);
console.log("Después del ataque la vida de charmandder es: " + charmander.vida);