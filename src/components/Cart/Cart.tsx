import React from "react";
import type { iItemDetail } from "../../App";
import { CartItem } from "./CartItem";
import { VscClose } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";

interface CartProps {
	openCart: boolean;
	cartItems: iItemDetail[];
	toggleCart: () => void;
	removeFromCart: (id: number) => void;
}

export function Cart({
	openCart,
	toggleCart,
	cartItems,
	removeFromCart,
}: CartProps) {
	return (
		<div className={openCart ? "cart cart-open" : "cart"}>
			<aside className="cart__drawer">
				<h2 className="cart__title">My Grocery Cart</h2>
				<button className="cart__closebtn" onClick={() => toggleCart()}>
					<VscClose />
				</button>

				<div className="cart__item-wrapper">
					{cartItems.length === 0 ? (
						// 장바구니 is empty
						<div className="empty">
							<TiShoppingCart />
							<p>The cart is empty now</p>
						</div>
					) : (
						// 장바구니 has items
						cartItems.map((item) => (
							<CartItem
								key={item.id}
								item={item}
								removeFromCart={removeFromCart}
							/>
						))
					)}
				</div>
			</aside>
			<div className="overlay" onClick={() => toggleCart()}></div>
		</div>
	);
}
