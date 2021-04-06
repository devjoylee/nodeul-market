import React from "react";
import { Container } from "../Container";
import type { iItemDetail } from "../../App";
import { Item } from "./Item";
import { InventoryEmpty } from "./InventoryEmpty";

interface InventoryProps {
	inventoryItems: iItemDetail[];
	addToCart: (clickedItem: iItemDetail) => void;
	toggleModal: () => void;
}

export function Inventory({
	inventoryItems,
	addToCart,
	toggleModal,
}: InventoryProps) {
	return (
		<main className="inventory">
			<Container margin>
				{inventoryItems.length === 0 ? (
					// if the inventory is empty
					<InventoryEmpty toggleModal={toggleModal} />
				) : (
					// if the inventory has items
					<div className="item-list">
						{inventoryItems.map((item) => (
							<Item key={item.id} item={item} addToCart={addToCart} />
						))}
					</div>
				)}
			</Container>
		</main>
	);
}
