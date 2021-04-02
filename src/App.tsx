import React, { useState } from 'react';
import './styles/style.css';
import { items } from './data';
import { Header, ItemList, Footer, Cart } from './components';

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

  const handleToggleCart = () => {
    setOpenCart(!openCart);
    console.log(openCart);
  };

  return (
    <>
      <Header toggleCart={handleToggleCart} />
      <ItemList items={items} />
      <Footer />
      <Cart openCart={openCart} toggleCart={handleToggleCart} />
    </>
  );
}

export default App;
