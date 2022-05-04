import React from "react";

export const Carousel = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel">
			<div className="carousel-inner bg-secondary">
				<div className="carousel-item active">
					<img
						src="https://i.imgur.com/2dX4DLz.png"
						className="d-block w-100 carousel-pokemon"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://i.imgur.com/TqQCVlK.png"
						className="d-block w-100 carousel-pokemon"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://i.imgur.com/jtiQFj2.png"
						className="d-block w-100 carousel-pokemon"
						alt="..."
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
