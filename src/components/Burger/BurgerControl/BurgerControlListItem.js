import React from "react";
import BurgerControlListItemButton from "./BurgerControlButton";

const BurgerControlListItem = ({ ingredients, ingredient, burgerControl }) => {
	return (
		<li className="p-3 text-white">
			<div className="flex items-center justify-between flex-wrap">
				<h2 className="lg:text-lg md:text-base">
					<strong>{ingredient.label}</strong>
				</h2>
				<div>
					<BurgerControlListItemButton
						text="+"
						onClick={() => burgerControl(ingredient.type, "+")}
					/>
					<span className="m-1 font-bold lg:text-lg md:text-base">
						{ingredients[ingredient.type]}
					</span>
					<BurgerControlListItemButton
						text="-"
						onClick={() => burgerControl(ingredient.type, "-")}
					/>
				</div>
			</div>
		</li>
	);
};

export default BurgerControlListItem;
