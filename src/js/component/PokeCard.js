import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const PokeCard = ({
	title,
	colSpacing = "col-12",
	image,
	idPokemon = 0,
	pokemon
}) => {
	const {store, actions }= useContext(Context)
	let history = useHistory()	
	const handlePagePokemon=()=>{
		actions.getActualPokemon(pokemon)
		history.push(`/pokemon/${idPokemon}`)
	}
	return (
		<div className={colSpacing}>
			<div className="card">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<Button onClick={handlePagePokemon}> Go to {title} </Button>
				</div>
			</div>
		</div>
	);
};

PokeCard.propTypes = {
	title: PropTypes.string,
	colSpacing: PropTypes.string,
};

Button.propTypes = {
	title: PropTypes.string,
};