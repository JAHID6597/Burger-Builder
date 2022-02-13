import ingredientData from "../../components/Burger/BurgerIngredient/data";

const burgerBuilderReducer = (state, action) => {
	if (action.type === "CHANGE_INGREDIENTS") {
		const { buttonType, ingredientType } = action.payload;
		const { ingredients } = state;
		let { totalPrice, ingredientDirection } = state;
		const data = { ...ingredients };

		const idx = ingredientData.findIndex(
			(ingredient) => ingredient.type === ingredientType
		);

		if (buttonType === "+") {
			data[ingredientType]++;

			totalPrice = parseFloat(totalPrice) + ingredientData[idx].price;
		} else {
			if (data[ingredientType] === 0) {
				data[ingredientType] = 0;

				return { ...state };
			} else {
				data[ingredientType]--;

				totalPrice = parseFloat(totalPrice) - ingredientData[idx].price;
			}
		}

		return {
			...state,
			ingredients: data,
			totalPrice: totalPrice.toFixed(2),
			ingredientDirection: buttonType === "+" && !ingredientDirection
		};
	}
};

export default burgerBuilderReducer;
