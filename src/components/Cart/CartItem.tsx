import React, { useState } from 'react';
import type { iItemDetail } from 'src/App';
import { RiDeleteBin6Line, RiHeartAddFill } from 'react-icons/ri';

interface CartItemProps {
  item: iItemDetail;
  removeFromCart: (id: number) => void;
}

export function CartItem({ item, removeFromCart }: CartItemProps) {
  const [amount, setAmount] = useState(1);

  // 버튼 클릭 시, 아이템 개수 감소 -> 최소 수량 0
  const decreaseAmount = () => {
    if (amount <= 0) {
      return;
    } else {
      setAmount(amount - 1);
    }
  };

  // 버튼 클릭 시, 아이템 개수 증가 -> 최대 수량 (아이템 재고)
  const increaseAmount = () => {
    if (amount >= item.amount) {
      alert(`구매 가능 수량을 확인해주세요😥 (현재 재고: ${item.amount}개)`);
      return;
    }
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
