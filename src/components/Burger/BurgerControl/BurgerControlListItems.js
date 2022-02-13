import React from "react";
import ingredientData from "../BurgerIngredient/data";
import BurgerControlListItem from "./BurgerControlListItem";

const BurgerControlListItems = ({ ingredients, burgerControl }) => {
	return (
		<ul style={{ background: "#c15711" }}>
			{ingredientData.map((ingredient, index) => (
				<BurgerControlListItem
					key={index}
					ingredients={ingredients}
					ingredient={ingredient}
					burgerControl={burgerControl}
				/>
			))}
		</ul>
	);
};

export default BurgerControlListItems;
