import React from "react";
import ingredientData from "../BurgerIngredient/data";

const tableClasses = "w-full border-collapse border-2 border-orange-400";

const tableHeadClasses = "lg:text-lg md:text-base text-gray-900 p-3 text-left";
const tableHeadRowClasses = "border-2 border-orange-400";

const tableDataClasses =
	"p-3 whitespace-nowrap lg:text-lg md:text-base text-gray-900";

const BurgerPrice = ({ ingredients, totalPrice }) => {
	return (
		<div class="p-3">
			<div class="w-full overflow-x-auto">
				<table className={tableClasses}>
					<thead className={tableClasses}>
						<tr className={tableHeadRowClasses}>
							<th scope="col" className={tableHeadClasses}>
								Ingredient
							</th>
							<th scope="col" className={tableHeadClasses}></th>
							<th scope="col" className={tableHeadClasses}>
								Total
							</th>
						</tr>
					</thead>
					<tbody className={tableDataClasses}>
						<tr>
							<td className={tableDataClasses}>Bread</td>
							<td className={tableDataClasses}>4.0 X 1</td>
							<td className={tableDataClasses}>4.00</td>
						</tr>
						{ingredientData.map((ingredient) => (
							<tr>
								<td className={tableDataClasses}>
									{ingredient.label}
								</td>
								<td className={tableDataClasses}>
									{ingredient.price} X{" "}
									{ingredients[ingredient.type]}
								</td>
								<td className={tableDataClasses}>
									{(
										ingredient.price *
										ingredients[ingredient.type]
									).toFixed(2)}
								</td>
							</tr>
						))}
						<tr className={tableHeadRowClasses}>
							<td className={`${tableDataClasses} font-bold`}>
								Total Price
							</td>
							<td
								className={`${tableDataClasses} font-bold`}
							></td>
							<td className={`${tableDataClasses} font-bold`}>
								{totalPrice}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BurgerPrice;
