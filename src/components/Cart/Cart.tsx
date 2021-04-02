import React from 'react';

interface CartProps {
  openCart: boolean;
  toggleCart: () => void;
}

export function Cart({ openCart, toggleCart }: CartProps) {
  return (
    <div className={openCart ? 'cart cart-open' : 'cart'}>
      <aside className="cart__drawer">
        <h1>My Cart</h1>
        <button onClick={() => toggleCart()}>X</button>
      </aside>
      <div className="cart__overlay" onClick={() => toggleCart()}></div>
    </div>
  );
}
