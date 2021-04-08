import React, { useState } from "react";
import type { iItemDetail } from "../../App";
import { RiDeleteBin6Line, RiHeartAddFill } from "react-icons/ri";

interface CartItemProps {
	item: iItemDetail;
	removeFromCart: (id: number) => void;
}

export function CartItem({ item, removeFromCart }: CartItemProps) {
	const [amount, setAmount] = useState(1);

	// 버튼 클릭 시, 아이템 개수 감소 -> 최소 수량 0
	const decreaseAmount = () => {
		if (amount <= 0) {
			return;
		} else {
			setAmount(amount - 1);
		}
	};

	// 버튼 클릭 시, 아이템 개수 증가 -> 최대 수량 (아이템 재고)
	const increaseAmount = () => {
		if (amount >= item.amount) {
			alert(
				`Sorry, You’ve reached the maximum order 😥 (Current stock: ${item.amount})`
			);
			return;
		}
		setAmount(amount + 1);
	};

	return (
		<section className="cart-item">
			<div className="cart-info-wrapper">
				<ul className="cart-info">
					<li className="name">{item.name}</li>
					<li className="amount">current stock : {item.amount}</li>
					<li className="price">
						￦{item.price * amount} <span>(￦{item.price} per item)</span>
					</li>
					<div className="amount-controller">
						<button onClick={() => decreaseAmount()}>-</button>
						<span>{amount}</span>
						<button onClick={() => increaseAmount()}>+</button>
					</div>
				</ul>
				<div className="image-box">
					<img src={item.image} alt={item.name} className="thumbnail" />
				</div>
			</div>
			<div className="cart-btn-wrapper">
				<button
					className="cart-btn btn"
					id="delete-btn"
					onClick={() => removeFromCart(item.id)}
				>
					<RiDeleteBin6Line />
					Delete this
				</button>
				<button className="cart-btn btn" id="buy-btn">
					<RiHeartAddFill />
					Buy this
				</button>
			</div>
		</section>
	);
}
