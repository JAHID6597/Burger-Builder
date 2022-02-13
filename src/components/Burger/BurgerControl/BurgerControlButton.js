import React from "react";

const BurgerControlListItemButton = ({ text, ...other }) => {
	return (
		<button
			className="rounded-full bg-white text-black h-10 w-10 m-0.5 font-bold"
			{...other}
		>
			{text}
		</button>
	);
};

export default BurgerControlListItemButton;
