import React from 'react';
import type { iItemDetail } from 'src/App';
import { CartItem } from './CartItem';

interface CartProps {
  openCart: boolean;
  itemInCart: iItemDetail[];
  toggleCart: () => void;
}

export function Cart({ openCart, toggleCart, itemInCart }: CartProps) {
  return (
    <div className={openCart ? 'cart cart-open' : 'cart'}>
      <aside className="cart__drawer">
        <h1>My Cart</h1>

        {itemInCart.length === 0 ? (
          // 장바구니 is empty
          <p>장바구니가 비어있어요😆</p>
        ) : (
          // 장바구니 has items
          itemInCart.map((item) => <CartItem key={item.id} item={item} />)
        )}

        <button className="cart__closebtn" onClick={() => toggleCart()}>
          X
        </button>
      </aside>
      <div className="cart__overlay" onClick={() => toggleCart()}></div>
    </div>
  );
}
