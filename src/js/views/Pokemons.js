import React, { useState, useEffect, useContext } from "react";
import { PokeCard } from "../component/PokeCard";
import { Context } from "../store/appContext";

export const Pokemons = () => {
	const { store, actions } = useContext(Context)
	const [addPokemonName, setAddPokemonName] = useState("");
	const [searchPokemonName, setSearchPokemonName] = useState("");
	const [pokemons, setPokemons] = useState([]);
	const [pokemonsWithImages, setPokemonsWithImages] = useState([]);
	const [pokemonsFilteredState, setPokemonsFilteredState] = useState([]);
	const [isReady, setIsReady] = useState(false);
	// const [arePokemonsImages, setArePokemonsImages] = useState(false);
	// useEffect(() => {
    //     console.log("im here")
	// 	const getPokemons = async () => {
	// 		let response = await fetch(
	// 			"https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
	// 		);
	// 		let data = await response.json();
	// 		setPokemons(data.results);
	// 		// setArePokemons(true);
	// 	};

	// 	// CON THEN
	// 	// const getPokemons = () => {
	// 	// 	fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
	// 	// 		.then((response) => {
	// 	// 			return response.json();
	// 	// 		})
	// 	// 		.then((data) => {
	// 	// 			console.log(data);
	// 	// 		});
	// 	// };
	// 	getPokemons();
	// }, []);

	// useEffect(() => {
	// 	const getImagesPokemons = () => {
	// 		let newPokemonsArray = [];
	// 		store.pokemons.map(async (pokemon) => {
	// 			let response = await fetch(pokemon.url);
	// 			let data = await response.json();
	// 			let newPokemon = {
	// 				name: pokemon.name,
	// 				image: data.sprites.front_shiny,
	// 			};
	// 			setPokemonsWithImages((prevState) => [
	// 				...prevState,
	// 				newPokemon,
	// 			]);
	// 			// newPokemonsArray.push(newPokemon);
	// 			// if (newPokemonsArray.length === 20)
	// 			// 	setPokemonsWithImages(newPokemonsArray);
	// 		});

	// 		// console.log(newPokemonsArray);
	// 	};
	// 	if (store.pokemons) getImagesPokemons();
	// }, [store.pokemons]);

	// useEffect(() => {
	// 	console.log("estoy por aca");
	// 	if (pokemonsWithImages.length > 0) {
	// 		setIsReady(true);
	// 	}
	// }, [pokemonsWithImages]);

	useEffect(() => {
		const handleSearch = () => {
			let pokemonsNamesCopy = [...pokemonsNames];
			let pokemonsFiltered = pokemonsNamesCopy.filter((pokemon) => {
				return pokemon
					.toLowerCase()
					.includes(searchPokemonName.toLowerCase());
			});
			console.log("ARREGLO ANTES DE CAMBIO", newPokemonsArray);
			setPokemonsFilteredState(pokemonsFiltered);
		};
		if (searchPokemonName !== "") {
			handleSearch();
		} else setPokemonsFilteredState([]);
	}, [searchPokemonName]);

	const handlePokemons = (e) => {
		if (e.key === "Enter") {
			setPokemons([...store.pokemons, addPokemonName]);
		}
	};
	return (
		<div className="container-fluid">
			<input
				value={addPokemonName}
				onChange={(e) => setAddPokemonName(e.target.value)}
				onKeyDown={(e) => handlePokemons(e)}
				type="text"
				placeholder="Add a new pokemon"
			/>

			<input
				value={searchPokemonName}
				onChange={(e) => setSearchPokemonName(e.target.value)}
				type="text"
				placeholder="Search a pokemon"
			/>

			<div className="row">
				{
					store.pokemons.map((pokemon, index) => {
						return (
							<PokeCard
								key={`${pokemon.name}${index}`}
								title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
									1
								)}`}
								image={pokemon.image}
								pokemon={pokemon}
								idPokemon={pokemon.name}
								colSpacing="col-4"
							/>
						);
					})}
			</div>
		</div>
	);
};

// pokemonsFilteredState.length > 0
// 	? pokemonsFilteredState.map((pokemon, index) => {
// 			return (
// 				<PokeCard
// 					key={`${pokemon.name}${index}`}
// 					title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
// 						1
// 					)}`}
// 					// img={pokemon}
// 					colSpacing="col-4"
// 				/>
// 			);
// 	  })
// 	:
