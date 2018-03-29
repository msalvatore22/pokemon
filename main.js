let div = document.querySelector("div")

class Trainer {
	constructor() {
		this.all []
	}

	add(pokemon) {
		this.all.push(pokemon)
	}
}

class Pokemon {
	constructor(hp, attack, defense, abilities, name){
	this.hp = hp
	this.attack = attack
	this.defense = defense
	this.abilities = abilities
	this.name = name
	}
}

