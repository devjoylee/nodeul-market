import React, { useState } from 'react';
import type { iItemDetail } from 'src/App';
import { RiDeleteBin6Line, RiHeartAddFill } from 'react-icons/ri';

interface CartItemProps {
  item: iItemDetail;
  removeFromCart: (id: number) => void;
}

export function CartItem({ item, removeFromCart }: CartItemProps) {
  const [amount, setAmount] = useState(1);

  const decreaseAmount = () => {
    if (amount <= 0) return;
    setAmount(amount - 1);
  };

  const increaseAmount = () => {
    if (amount >= item.amount) return;
    setAmount(amount + 1);
  };

  return (
    <section className="cart-item">
      <div className="cart-info-wrapper">
        <div className="cart-info">
          <h3 className="name">{item.name}</h3>
          <span className="category">{item.category}</span>
          <span className="amount">재고 : {item.amount}개</span>
          <p className="price">
            {item.price * amount}원 <span>(개당 {item.price}원)</span>
          </p>
          <div className="amount-controller">
            <button onClick={() => decreaseAmount()}>-</button>
            <span>{amount}</span>
            <button onClick={() => increaseAmount()}>+</button>
          </div>
        </div>
        <div className="image-box">
          <img src={item.image} alt={item.name} className="thumbnail" />
        </div>
      </div>
      <div className="cart-btn-wrapper">
        <button
          className="cart-btn btn"
          id="delete-btn"
          onClick={() => removeFromCart(item.id)}
        >
          <RiDeleteBin6Line />
          삭제할래요
        </button>
        <button className="cart-btn btn" id="buy-btn">
          <RiHeartAddFill />
          구매할래요
        </button>
      </div>
    </section>
  );
}
