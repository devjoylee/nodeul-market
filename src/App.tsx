import React, { useState } from "react";
import "./styles/App.scss";
import {
	Header,
	MainBanner,
	Inventory,
	Footer,
	Cart,
	NewItemModal,
} from "./components";

export interface iItemDetail {
	id: number;
	name: string;
	category: string;
	price: number | any;
	quantity: number | any;
	image?: string;
	description: string;
}

function App() {
	const [openCart, setOpenCart] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const [inventoryItems, setInventoryItems] = useState(
		defaultList as iItemDetail[]
	);
	const [cartItems, setCartItems] = useState([] as iItemDetail[]);
	const handleToggleCart = () => setOpenCart(!openCart);
	const handleToggleModal = () => setOpenModal(!openModal);

	// 인벤토리에서 ADD TO CART 버튼 클릭 시, 카트로 이동
	const handleAddToCart = (clickedItem: iItemDetail) => {
		setCartItems((prevItems) => {
			// 1. Is the item already added in the cart?
			const isItemInCart = prevItems.find((item) => item.id === clickedItem.id);

			if (isItemInCart) {
				alert("It's already in your cart 😋");
				return [...prevItems];
			}

			// First time the item is added
			alert("Successfully added 🎉");
			return [{ ...clickedItem }, ...prevItems];
		});
	};

	// 카트에서 DELETE버튼 클릭 시 삭제
	const handleRemoveFromCart = (id: number) => {
		if (confirm("Are you sure to delete it from the cart?")) {
			setCartItems((prevItems) => {
				return prevItems.filter((item) => item.id !== id);
			});
		}
	};

	// 새 아이템 추가 창에서 submit하면 인벤토리로 아이템 추가
	const handleAddToInventory = (item: iItemDetail) => {
		setInventoryItems((prevItems) => {
			return [{ ...item }, ...prevItems];
		});
	};

	return (
		<>
			<Header toggleCart={handleToggleCart} toggleModal={handleToggleModal} />
			<MainBanner toggleModal={handleToggleModal} />
			<Inventory inventoryItems={inventoryItems} addToCart={handleAddToCart} />
			<Footer />
			<Cart
				openCart={openCart}
				toggleCart={handleToggleCart}
				cartItems={cartItems}
				removeFromCart={handleRemoveFromCart}
			/>
			<NewItemModal
				openModal={openModal}
				toggleModal={handleToggleModal}
				addToInventory={handleAddToInventory}
			/>
		</>
	);
}

export default App;

const defaultList = [
	{
		id: 2,
		name: "Black Bean Soy Milk",
		category: "dairy",
		price: 2,
		quantity: 10,
		image:
			"https://mblogthumb-phinf.pstatic.net/MjAyMDA4MzBfNjQg/MDAxNTk4NzU1MjAwMjYw.nNlvBJjsqIFkHswG9edDDbHIwLqcq4cgGps3SjSm2HIg.9qoCE3_IVuyDhvZ1bmoU0nLjkRylUbE2t9RTbS8FQ0Ag.JPEG.choys072/1598755199614.jpg?type=w800",
		description:
			"It's small size of soy milk. Easy to bring it! the expiration date is on Dec 2023",
	},
	{
		id: 1,
		name: "Apples! 3 for $2",
		category: "fruit",
		price: 2,
		quantity: 18,
		image:
			"https://lfmimages.blob.core.windows.net/400952-highcountryfoodhub/products/producers/28f7d207-2423-46c0-93c3-b1f24b650c90/IMG_0009.jpeg",
		description: "I bought too many apples. ",
	},
	{
		id: 0,
		name: "Potatoes of my own growing",
		category: "vegitable",
		price: 5,
		quantity: 47,
		image:
			"https://mblogthumb-phinf.pstatic.net/20150702_15/dangen2001_1435793962546r5wWV_JPEG/IMG_4187.jpg?type=w2",
		description:
			"Get organic potatoes at low price!! Only $5, and you can have a bag of fresh potatoes.",
	},
];
