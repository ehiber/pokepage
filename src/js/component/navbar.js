import React, { useState, useEffect } from "react";
import PokeLogo from "../../img/PokeLogo";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [input, setInput] = useState();
	const [search, setSearch] = useState("");
	const handleInput = (e) => {
		const regex = /^[0-9]*$/;
		if (e.target.value !== "" && regex.test(e.target.value)) {
			alert("NO PONGAS NUMEROS");
		} else {
			setInput(e.target.value);
		}
	};
	return (
		<div className="container-fluid navbar-pokemon">
			<div className="row">
				<div className="col-12 text-center">
					<PokeLogo width={200} height={100} />
				</div>
				<ul className="nav col-12 justify-content-center">
					<li className="nav-item">
						<Link className="nav-link active" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/pokemons">
							Pokemons
						</Link>
					</li>
					<label
						className="label-search-pokemon"
						htmlFor="search-pokemon">
						<input
							name="search-pokemon"
							className="search-pokemon"
							value={input}
							onChange={(e) => {
								handleInput(e);
							}}
							placeholder="Find Your Pokemon"
						/>
					</label>
				</ul>
			</div>
		</div>
	);
};

