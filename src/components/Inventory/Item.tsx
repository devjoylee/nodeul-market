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
				<div className="item__detail">
					<h3>{item.name}</h3>
					<p>카테고리 : {item.category}</p>
					<p>수량 : {item.amount}</p>
					<p>{item.price}원</p>
					<p>{item.description}</p>
				</div>
				<button className="item__addbtn btn" onClick={() => addToCart(item)}>
					<MdAddShoppingCart />
					ADD TO CART
				</button>
			</div>
		</div>
	);
}
