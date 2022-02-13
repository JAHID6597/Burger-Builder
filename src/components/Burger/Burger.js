import React, { useReducer } from "react";
import burgerBuilderReducer from "../../store/reducers/burgerBuilderReducer";
import "./Burger.css";
import BurgerControlListItems from "./BurgerControl/BurgerControlListItems";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import BurgerPrice from "./BurgerPrice/BurgerPrice";

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0
	},
	totalPrice: 4.0,
	ingredientDirection: true
};

const Burger = () => {
	const [burger, dispatch] = useReducer(burgerBuilderReducer, initialState);
	const { ingredients, totalPrice, ingredientDirection } = burger;

	const burgerControl = (ingredientType, buttonType) => {
		dispatch({
			type: "CHANGE_INGREDIENTS",
			payload: { ingredientType, buttonType }
		});
	};

	return (
		<div className="burgerWrapper">
			<div className="grid lg:grid-cols-12 md:grid-cols-1 content-center min-h-screen gap-4">
				<div className="p-3 m-auto w-full lg:col-span-3 md:col-span-full">
					<BurgerControlListItems
						ingredients={ingredients}
						burgerControl={burgerControl}
					/>
				</div>
				<div className="burger m-auto lg:col-span-6 md:col-span-full lg:order-none order-first">
					<BurgerIngredient type="bread-top" />
					{Object.entries(ingredients).map(([key, value]) => (
						<>
							{Array.from(Array(value), () => (
								<BurgerIngredient
									key={key}
									type={key}
									ingredientDirection={ingredientDirection}
								/>
							))}
						</>
					))}
					<BurgerIngredient type="bread-bottom" />
				</div>
				<div className="my-auto lg:col-span-3 md:col-span-full">
					<BurgerPrice
						ingredients={ingredients}
						totalPrice={totalPrice}
					/>
				</div>
			</div>
		</div>
	);
};

export default Burger;
