import React from 'react';
import type { iItemDetail } from 'src/App';
import { CartItem } from './CartItem';
import { VscClose } from 'react-icons/vsc';

interface CartProps {
  openCart: boolean;
  itemInCart: iItemDetail[];
  toggleCart: () => void;
}

export function Cart({ openCart, toggleCart, itemInCart }: CartProps) {
  return (
    <div className={openCart ? 'cart cart-open' : 'cart'}>
      <aside className="cart__drawer">
        <h2 className="cart__title">나의 장바구니</h2>
        <button className="cart__closebtn" onClick={() => toggleCart()}>
          <VscClose />
        </button>

        <div className="cart__item-wrapper">
          {itemInCart.length === 0 ? (
            // 장바구니 is empty
            <p>장바구니가 비어있어요😥</p>
          ) : (
            // 장바구니 has items
            itemInCart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
      </aside>
      <div className="cart__overlay" onClick={() => toggleCart()}></div>
    </div>
  );
}
