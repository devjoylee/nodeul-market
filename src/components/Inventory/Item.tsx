import React from "react";
import type { iItemDetail } from "../../App";
import { MdAddShoppingCart } from "react-icons/md";

interface ItemProps {
	item: iItemDetail;
	addToCart: (clickedItem: iItemDetail) => void;
}

export function Item({ item, addToCart }: ItemProps) {
	const colorizeCategory = () => {
		switch (item.category) {
			case "fruit":
				return "label-color-1";
			case "dairy":
				return "label-color-2";
			case "vegitable":
				return "label-color-3";
			case "frozen":
				return "label-color-4";
			case "etc":
				return "label-color-5";
			default:
				throw new Error("Unhandled input is selected");
		}
	};

	return (
		<div className="item-wrapper grid-lg grid-md grid-sm">
			<div className="item">
				<div>
					<div className="image-box">
						<img src={item.image} alt={item.name} className="thumbnail" />
					</div>
					<ul className="item__detail">
						<li className="category">
							<span className={colorizeCategory()}>{item.category}</span>
						</li>
						<li className="name">{item.name}</li>
						<li className="stock">stock : {item.quantity}</li>
						<li className="description">{item.description}</li>
						<li className="price">${item.price}</li>
					</ul>
				</div>
				<button className="item__addbtn btn" onClick={() => addToCart(item)}>
					<MdAddShoppingCart />
					ADD TO CART
				</button>
			</div>
		</div>
	);
}
