import React from "react";
import type { iItemDetail } from "../../App";
import { MdAddShoppingCart } from "react-icons/md";

interface ItemProps {
	item: iItemDetail;
	addToCart: (clickedItem: iItemDetail) => void;
}

export function Item({ item, addToCart }: ItemProps) {
	return (
		<div className="item-wrapper grid-lg grid-md grid-sm">
			<div className="item">
				<div className="image-box">
					<img src={item.image} alt={item.name} className="thumbnail" />
				</div>
				<ul className="item__detail">
					<li className="category">
						<span>{item.category}</span>
					</li>
					<li className="name">{item.name}</li>
					<li className="stock">stock : {item.amount}</li>
					<li className="description">{item.description}</li>
					<li className="price">￦{item.price}</li>
				</ul>
				<button className="item__addbtn btn" onClick={() => addToCart(item)}>
					<MdAddShoppingCart />
					ADD TO CART
				</button>
			</div>
		</div>
	);
}
