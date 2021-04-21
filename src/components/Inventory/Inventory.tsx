import React, { useState } from "react";
import { Container } from "../Container";
import type { iItemDetail } from "../../App";
import { Item } from "./Item";

interface InventoryProps {
	inventoryItems: iItemDetail[];
	addToCart: (clickedItem: iItemDetail) => void;
}

export function Inventory({ inventoryItems, addToCart }: InventoryProps) {
	const allItems = inventoryItems;
	const [filter, setFilter] = useState([] as iItemDetail[]);

	const filterByCategory = (
		e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
	) => {
		const selected = e.currentTarget.id;
		setFilter(inventoryItems.filter((item) => item.category === selected));
	};

	return (
		<section className="inventory">
			<Container margin>
				<div className="inventory__filter">
					<div className="filter-box">
						<p
							className="filter-name"
							id="all"
							onClick={(e) => filterByCategory(e)}
						>
							🛒 All Items
						</p>
					</div>
					<div className="filter-box">
						<p
							className="filter-name"
							id="fruit"
							onClick={(e) => filterByCategory(e)}
						>
							🍎 Fruit
						</p>
					</div>
					<div className="filter-box">
						<p
							className="filter-name"
							id="dairy"
							onClick={(e) => filterByCategory(e)}
						>
							🧀 Dairy Products
						</p>
					</div>
					<div className="filter-box">
						<p
							className="filter-name"
							id="vegitable"
							onClick={(e) => filterByCategory(e)}
						>
							🥑 Vegitable
						</p>
					</div>
					<div className="filter-box">
						<p
							className="filter-name"
							id="frozen"
							onClick={(e) => filterByCategory(e)}
						>
							🧊 Frozen
						</p>
					</div>
				</div>
				{inventoryItems.length === 0 ? (
					// if the inventory is empty
					<div className="inventory-empty">No Items available</div>
				) : (
					// if the inventory has items
					<>
						<div className="item-list">
							{inventoryItems.map((item) => (
								<Item key={item.id} item={item} addToCart={addToCart} />
							))}
						</div>
					</>
				)}
			</Container>
		</section>
	);
}
