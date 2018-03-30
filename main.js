let ul = document.querySelector("ul")


class Trainer {
	constructor() {
		this.all = []
	}

	add(pokemon) {
		this.all.push(pokemon)
	}
}

class Pokemon {
	constructor(name, hp, attack, defense, abilities){
	this.name = name
	this.hp = hp
	this.attack = attack
	this.defense = defense
	this.abilities = abilities
	
	}
	// render(){
	// 	let section = document.createElement("section")
	// 	let li = document.createElement("li")
	// 	li.innerHTML = this.name + this.hp + this.attack + this.defense + this.abilities
		
	// }
}

axios.get("https://pokeapi.co/api/v2/pokemon/146").then((response) => {
	let data = response.data
	let name = response.data.name
	let hp = response.data.stats[5].base_stat
	let trainer = new Trainer()
	let section = document.querySelector("#moltres")
	let ul = document.createElement("ul")
	let li = document.createElement("li")

	let moltres = new Pokemon (
			data.name

		)


		trainer.add(moltres)

		li.innerHTML = moltres.name

		section.appendChild(ul)
		ul.appendChild(li)


}).catch((error) => {
  console.log(error)
})

// axios.get("https://pokeapi.co/api/v2/pokemon/245").then((response) => {
// 	let data = response.data
// 	let trainer = new Trainer()

// 	data.forEach((item) => {
// 		let section = document.querySelector("#suicune")
// 		let li = document.createElement("li")

// 		let suicune = new Pokemon (
// 			item.forms[146].name
// 		)
		

// 		trainer.add(suicune)
// 		li.innerHTML = item.forms[146].name

// 		section.appendChild(ul)
// 		ul.appendChild(li)
// 	})

// }).catch((error) => {
//   console.log(error)
// })

// axios.get("https://pokeapi.co/api/v2/pokemon/250").then((response) => {
// 	let data = response.data
// 	let trainer = new Trainer()

// 	data.forEach((item) => {
// 		let section = document.querySelector("#ho-oh")
// 		let li = document.createElement("li")

// 		let hoOh = new Pokemon (
// 			item.forms[146].name
// 		)

// 		trainer.add(hoOh)
// 		li.innerHTML = item.forms[146].name

// 		section.appendChild(ul)
// 		ul.appendChild(li)
// 	})

// }).catch((error) => {
//   console.log(error)
// })
