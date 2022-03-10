import React from "react";

import { StyledCart } from "./Cart.styled";
import CartIcon from "./CartIcon";

const Cart = () => {
	return (
		<StyledCart>
			<span>
				<CartIcon />
			</span>
			<span></span>
			<span></span>
			{"Cart"}
		</StyledCart>
	);
};

export default Cart;
