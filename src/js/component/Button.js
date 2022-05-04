import React from "react";
import PropTypes from "prop-types";

export const Button = ({ title }) => {
	return (
		<a href="#" className="btn btn-primary">
			Go to {title} details
		</a>
	);
};

Button.propTypes = {
	title: PropTypes.string,
};