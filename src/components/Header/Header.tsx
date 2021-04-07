import React from "react";
import { Container } from "../Container";
import { RiHeartAddFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

interface HeaderProps {
	toggleCart: () => void;
	toggleModal: () => void;
}

export function Header({ toggleCart, toggleModal }: HeaderProps) {
	return (
		<header className="header">
			<Container margin>
				<div className="header-top">
					<h1 className="header__logo">NODEUL MARKET</h1>
					<div className="header__btns">
						<button className="addbtn" onClick={() => toggleModal()}>
							<RiHeartAddFill />
							Add Item
						</button>
						<button className="cartbtn" onClick={() => toggleCart()}>
							<TiShoppingCart />
							My Cart
						</button>
					</div>
				</div>

				{/* <ul className="header__menu">
					<li>🧅</li>
					<li>🥕</li>
					<li>🧄</li>
					<li>🍎</li>
					<li>🥔</li>
				</ul> */}
			</Container>
		</header>
	);
}
