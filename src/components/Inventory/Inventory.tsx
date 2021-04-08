import React from "react";
import { Container } from "../Container";
import type { iItemDetail } from "../../App";
import { Item } from "./Item";

interface InventoryProps {
	inventoryItems: iItemDetail[];
	addToCart: (clickedItem: iItemDetail) => void;
}

export function Inventory({ inventoryItems, addToCart }: InventoryProps) {
	return (
		<section className="inventory">
			<Container margin>
				{inventoryItems.length === 0 ? (
					// if the inventory is empty
					<div className="inventory-empty">No Items available</div>
				) : (
					// if the inventory has items
					<div className="item-list">
						{inventoryItems.map((item) => (
							<Item key={item.id} item={item} addToCart={addToCart} />
						))}
					</div>
				)}
			</Container>
		</section>
	);
}
