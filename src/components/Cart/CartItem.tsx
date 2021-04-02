import React from 'react';
import type { iItemDetail } from 'src/App';

interface CartItemProps {
  item: iItemDetail;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <section className="cart-item">
      <div className="cart-item__info">
        <div>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>{item.price}원</p>
        </div>
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item__btn">
        <button>삭제할래요</button>
        <button>구매할래요</button>
      </div>
    </section>
  );
}
