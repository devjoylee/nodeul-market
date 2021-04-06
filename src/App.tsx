import React, { useState } from 'react';
import './styles/App.css';
import { Header, Inventory, Footer, Cart, NewItemModal } from './components';

export interface iItemDetail {
  id: number;
  name: string;
  category: string;
  price?: number;
  amount: number;
  image?: string;
  description: string;
}

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [inventory, setInventory] = useState([] as iItemDetail[]);
  const [itemInCart, setItemInCart] = useState([] as iItemDetail[]);
  const handleToggleCart = () => setOpenCart(!openCart);
  const handleToggleModal = () => setOpenModal(!openModal);

  console.log(inventory);

  // 장바구니로 추가
  // 버튼 클릭 시, 장바구니에 있으면 추가x 없으면 추가
  const handleAddToCart = (clickedItem: iItemDetail) => {
    setItemInCart((cartItems) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = cartItems.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        alert('장바구니에 담은 상품입니다😋');
        return [...cartItems];
      }

      // First time the item is added
      return [...cartItems, { ...clickedItem }];
    });
  };

  // 장바구니에서 제거
  const handleRemoveFromCart = (id: number) => {
    if (confirm('선택한 상품을 장바구니에서 삭제할까요?')) {
      setItemInCart((cartItems) => {
        return cartItems.filter((item) => item.id !== id);
      });
    }
  };

  const handleNewItem = (item: iItemDetail) => {
    setInventory((items) => {
      return [...items, { ...item }];
    });
  };

  return (
    <>
      <Header toggleCart={handleToggleCart} toggleModal={handleToggleModal} />
      <Inventory items={inventory} addToCart={handleAddToCart} />
      <Footer />
      <Cart
        openCart={openCart}
        toggleCart={handleToggleCart}
        itemInCart={itemInCart}
        removeFromCart={handleRemoveFromCart}
      />
      <NewItemModal
        openModal={openModal}
        toggleModal={handleToggleModal}
        newItem={handleNewItem}
      />
    </>
  );
}

export default App;
