const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			pokemons: []
		},
		actions: {
			getPokemons: async () => {
				let response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
				);
				let data = await response.json();
				setStore({pokemons: data.results});
			},
			// FRACASO
			getPokemonsWithImages: ()=>{
				const store = getStore()
				let newPokemons = []
				store.pokemons.map(async (pokemon) => {
					let response = await fetch(pokemon.url);
					let data = await response.json();
					let newPokemon = {
						name: pokemon.name,
						image: data.sprites.front_shiny,
						pokemon: data
					};
					newPokemons.push(newPokemon)
					});
				setStore({pokemonsWithImage:newPokemons})
			},
			getActualPokemon: async (pokemon) => {
				let response = await fetch(pokemon.url);
				let data = await response.json();
				let newPokemon = {
					name: pokemon.name,
					image: data.sprites.front_shiny,
					pokemon: data
				};
				setStore({actualPokemon:newPokemon})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
