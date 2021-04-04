import React from 'react';
import type { iItemDetail } from 'src/App';
import { RiDeleteBin6Line, RiHeartAddFill } from 'react-icons/ri';

interface CartItemProps {
  item: iItemDetail;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <section className="cart-item">
      <div className="cart-item__info">
        <div className="info-wrapper">
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>{item.price}원</p>
        </div>
        <div className="image-box">
          <img src={item.image} alt={item.name} className="thumbnail" />
        </div>
      </div>
      <div className="cart-item__btns">
        <button className="cart-item__btn btn" id="delete-btn">
          <RiDeleteBin6Line />
          삭제할래요
        </button>
        <button className="cart-item__btn btn" id="buy-btn">
          <RiHeartAddFill />
          구매할래요
        </button>
      </div>
    </section>
  );
}
