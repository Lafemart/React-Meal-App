import styled from "styled-components";
import {colors, fonts} from '../../lib/theme'

export const StyledCart = styled.button`

	cursor: pointer;
	font: inherit;
	border: none;
	background-color:${colors.backGround.deeporange};
	color: white;
	padding: 0.75rem 3rem;
	justify-content: space-around;
	border-radius: 25px;
	font-weight: bold;
`;