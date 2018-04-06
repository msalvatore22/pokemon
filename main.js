class Zardchar {
	constructor() {
		this.all = []
	}

	add(pokemon) {
		this.all.push(pokemon)
	}
	get(name){
		for (let i = 0; i < this.all.length; i++){
			if(name == this.all[i].name){
				return this.all[i]
			}
		}
	}
}

let zardchar = new Zardchar()

class Pokemon {
	constructor(name, hp, attack, defense, abilities){
	this.name = name
	this.hp = hp
	this.attack = attack
	this.defense = defense
	this.abilities = abilities
	}	
}

axios.get("https://pokeapi.co/api/v2/pokemon/146/").then((response) => {
	let data = response.data
	let section = document.querySelector("#moltres")
	let name = document.querySelector(".moltres-name")
	let hp = document.querySelector(".moltres-hp")
	let hpValue = document.querySelector(".moltres-hp-value")
	let attack = document.querySelector(".moltres-attack")
	let attackValue = document.querySelector(".moltres-attack-value")
	let defense = document.querySelector(".moltres-defense")
	let defenseValue = document.querySelector(".moltres-defense-value")
	let ability1 = document.querySelector(".moltres-ability-1")
	let ability2 = document.querySelector(".moltres-ability-2")
	document.getElementById("moltresImg").src = "Moltres.png"

	let moltres = new Pokemon (
			data.name,
			data.stats[5].stat.name,
			data.stats[5].base_stat,
			data.stats[4].stat.name,
			data.stats[4].base_stat,
			data.stats[3].stat.name,
			data.stats[3].base_stat,
			data.abilities[0].ability.name,
			data.abilities[1].ability.name
		)


		zardchar.add(moltres)

		name.innerHTML = data.name
		hp.innerHTML = data.stats[5].stat.name
		hpValue.innerHTML = data.stats[5].base_stat
		attack.innerHTML = data.stats[4].stat.name
		attackValue.innerHTML = data.stats[4].base_stat
		defense.innerHTML = data.stats[3].stat.name
		defenseValue.innerHTML = data.stats[3].base_stat
		ability1.innerHTML = data.abilities[0].ability.name
		ability2.innerHTML = data.abilities[1].ability.name

}).catch((error) => {
  console.log(error)
})

axios.get("https://pokeapi.co/api/v2/pokemon/245/").then((response) => {
	let data = response.data
	let section = document.querySelector("#suicune")
	let name = document.querySelector(".suicune-name")
	let hp = document.querySelector(".suicune-hp")
	let hpValue = document.querySelector(".suicune-hp-value")
	let attack = document.querySelector(".suicune-attack")
	let attackValue = document.querySelector(".suicune-attack-value")
	let defense = document.querySelector(".suicune-defense")
	let defenseValue = document.querySelector(".suicune-defense-value")
	let ability1 = document.querySelector(".suicune-ability-1")
	let ability2 = document.querySelector(".suicune-ability-2")
	document.getElementById("suicuneImg").src = "Suicune.png"

	let suicune = new Pokemon (
			data.name,
			data.stats[5].stat.name,
			data.stats[5].base_stat,
			data.stats[4].stat.name,
			data.stats[4].base_stat,
			data.stats[3].stat.name,
			data.stats[3].base_stat,
			data.abilities[0].ability.name,
			data.abilities[1].ability.name

		)


		zardchar.add(suicune)

		name.innerHTML = data.name
		hp.innerHTML = data.stats[5].stat.name
		hpValue.innerHTML = data.stats[5].base_stat
		attack.innerHTML = data.stats[4].stat.name
		attackValue.innerHTML = data.stats[4].base_stat
		defense.innerHTML = data.stats[3].stat.name
		defenseValue.innerHTML = data.stats[3].base_stat
		ability1.innerHTML = data.abilities[0].ability.name
		ability2.innerHTML = data.abilities[1].ability.name
 


}).catch((error) => {
  console.log(error)
})


axios.get("https://pokeapi.co/api/v2/pokemon/250/").then((response) => {
	let data = response.data
	let section = document.querySelector("#ho-oh")
	let name = document.querySelector(".ho-oh-name")
	let hp = document.querySelector(".ho-oh-hp")
	let hpValue = document.querySelector(".ho-oh-hp-value")
	let attack = document.querySelector(".ho-oh-attack")
	let attackValue = document.querySelector(".ho-oh-attack-value")
	let defense = document.querySelector(".ho-oh-defense")
	let defenseValue = document.querySelector(".ho-oh-defense-value")
	let ability1 = document.querySelector(".ho-oh-ability-1")
	let ability2 = document.querySelector(".ho-oh-ability-2")
	document.getElementById("hoOhImg").src = "Ho-Oh.png"


	let hoOh = new Pokemon (
			data.name,
			data.stats[5].stat.name,
			data.stats[5].base_stat,
			data.stats[4].stat.name,
			data.stats[4].base_stat,
			data.stats[3].stat.name,
			data.stats[3].base_stat,
			data.abilities[0].ability.name,
			data.abilities[1].ability.name

		)


		zardchar.add(hoOh)

		name.innerHTML = data.name
		hp.innerHTML = data.stats[5].stat.name
		hpValue.innerHTML = data.stats[5].base_stat
		attack.innerHTML = data.stats[4].stat.name
		attackValue.innerHTML = data.stats[4].base_stat
		defense.innerHTML = data.stats[3].stat.name
		defenseValue.innerHTML = data.stats[3].base_stat
		ability1.innerHTML = data.abilities[0].ability.name
		ability2.innerHTML = data.abilities[1].ability.name
 


}).catch((error) => {
  console.log(error)
})

window.addEventListener("scroll", (event) => {
	let showNav = document.querySelectorAll(".vertical-nav")
	let scrollToShow = showNav[0]

	if(window.scrollY > 800){
		scrollToShow.classList.add("show")
	} else { 
		scrollToShow.classList.remove("show")

	}

});


document.querySelector(".nav-btn-moltres").addEventListener('click', (event) => {
	let section = document.getElementById("moltres")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".nav-btn-suicune").addEventListener('click', (event) => {
	let section = document.getElementById("suicune")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".nav-btn-ho-oh").addEventListener('click', (event) => {
	let section = document.getElementById("ho-oh")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-trainer").addEventListener('click', (event) => {
	let section = document.getElementById("trainer")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-moltres").addEventListener('click', (event) => {
	let section = document.getElementById("moltres")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-suicune").addEventListener('click', (event) => {
	let section = document.getElementById("suicune")
	section.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".vertical-ho-oh").addEventListener('click', (event) => {
	let section = document.getElementById("ho-oh")
	section.scrollIntoView({behavior: "smooth"});
});

