import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Pokemon = () => {
	const {store}=useContext(Context)
	let history = useHistory();
	const { idPokemon } = useParams();

	return (
		<>
			<h1>SOY EL ID DEL POKEMON {idPokemon}</h1>
			
			<img src={store.actualPokemon && store.actualPokemon.image} />

			<Link to="/pokemons"> Go Back </Link>
			<Button onClick={() => history.push("/pokemons")}>Go Back</Button>
		</>
	);
};
