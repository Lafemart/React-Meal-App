import React from "react";

import { StyledCart, StyledCartBadge } from "./Cart.styled";
import CartIcon from "./CartIcon";
import CartBadge from "./CartBadge";

const Cart = () => {
	return (
		<StyledCart>
			<span>
				<CartIcon />
			</span>
			<span>{"Your Cart"}</span>
			<span>
				<CartBadge />
			</span>
		</StyledCart>
	);
};

export default Cart;
