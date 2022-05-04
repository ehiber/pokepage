import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carousel } from "../component/Carousel";
import { CustomModal } from "../component/CustomModal";
import { PokeCards } from "../component/PokeCards";

export const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
			{/* <Navbar /> */}
			<Carousel />
			<CustomModal />
			<PokeCards />
			{/* <Footer /> */}
		</div>
	);
};

// PokeCard.propTypes = {
// 	title: PropTypes.string,
// 	colSpacing: PropTypes.string,
// };

