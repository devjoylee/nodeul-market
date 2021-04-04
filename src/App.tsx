import React, { useState } from 'react';
import './styles/App.css';
import { items } from './data';
import { Header, Inventory, Footer, Cart } from './components';

export interface iItemDetail {
  id: number;
  name: string;
  category: string;
  price: number;
  amount: number;
  image: string;
  description: string;
}

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [itemInCart, setItemInCart] = useState([] as iItemDetail[]);
  console.log(itemInCart);

  const handleToggleCart = () => setOpenCart(!openCart);

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

  const handleRemoveFromCart = (id: number) => {
    setItemInCart((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <Header toggleCart={handleToggleCart} />
      <Inventory items={items} addToCart={handleAddToCart} />
      <Footer />
      <Cart
        openCart={openCart}
        toggleCart={handleToggleCart}
        itemInCart={itemInCart}
        removeFromCart={handleRemoveFromCart}
      />
    </>
  );
}

export default App;
