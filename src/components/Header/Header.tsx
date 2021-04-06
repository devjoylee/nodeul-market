import React from "react";
import { Container } from "../Container";
import { IoAddCircleSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

interface HeaderProps {
	toggleCart: () => void;
	toggleModal: () => void;
}

export function Header({ toggleCart, toggleModal }: HeaderProps) {
	return (
		<header className="header">
			<Container margin>
				<h1 className="header__logo">Nodeul Market</h1>
				<ul className="header__menu">
					<li>🧅</li>
					<li>🥕</li>
					<li>🧄</li>
					<li>🍎</li>
					<li>🥔</li>
				</ul>

				<div className="header__btns">
					<button className="addbtn" onClick={() => toggleModal()}>
						<IoAddCircleSharp />
						Add Item
					</button>
					<button className="cartbtn" onClick={() => toggleCart()}>
						<TiShoppingCart />
						My Cart
					</button>
				</div>
			</Container>
		</header>
	);
}
