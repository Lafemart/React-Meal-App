import React from 'react'

import { Fragment } from 'react'
import Cart from '../Cart/Cart'
import { HeaderTop,	HeaderBottom } from "./Header.styled";
import mealsImage from '../../assets/meals.jpg'


const Header = () => {
  return (
		<Fragment>
				<HeaderTop>
					<h1>{"REACT MEAL"}</h1>
					<Cart />  
				</HeaderTop>
				<HeaderBottom>
					<img src={mealsImage} alt="" />
				</HeaderBottom>
		</Fragment>
	);
}



export default Header