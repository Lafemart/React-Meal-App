import React from "react";
import {
	StyledMealItem,
	StyledDescription,
	StyledPrice,
} from "./MealItem.styled";

const MealItem = ({ name, description, price }) => {
	const amount = `$${price.toFixed(2)}`;
	return(
        <li>
		<StyledMealItem>
			<h3>{name}</h3>
			<StyledDescription>{description}</StyledDescription>
			<StyledPrice>{amount}</StyledPrice>
		</StyledMealItem>
		<div></div>
	</li>
    )	
};

export default MealItem;
