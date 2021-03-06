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

	const [inventoryItems, setInventoryItems] = useState([] as iItemDetail[]);
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
