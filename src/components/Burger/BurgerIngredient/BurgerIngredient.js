import React from "react";
import "./BurgerIngredient.css";
import Fade from "react-reveal/Fade";

const BurgerIngredient = ({ type, ingredientDirection }) => {
	return (
		<>
			{type === "bread-top" && (
				<Fade top>
					<div className="breadTop">
						<div className="seeds1"></div>
						<div className="seeds2"></div>
					</div>
				</Fade>
			)}
			{type === "bread-bottom" && (
				<Fade bottom>
					<div className="breadBottom"></div>
				</Fade>
			)}
			{type === "salad" && (
				<Fade left={!ingredientDirection} right={ingredientDirection}>
					<div className="salad"></div>
				</Fade>
			)}
			{type === "bacon" && (
				<Fade left={!ingredientDirection} right={ingredientDirection}>
					<div className="bacon"></div>
				</Fade>
			)}
			{type === "cheese" && (
				<Fade left={!ingredientDirection} right={ingredientDirection}>
					<div className="cheese"></div>
				</Fade>
			)}
			{type === "meat" && (
				<Fade left={!ingredientDirection} right={ingredientDirection}>
					<div className="meat"></div>
				</Fade>
			)}
		</>
	);
};

export default BurgerIngredient;
