import React from 'react';
import type { iItemDetail } from '../../App';

interface ItemProps {
  item: iItemDetail;
}

export function Item({ item }: ItemProps) {
  return (
    <div className="item-wrapper grid-lg grid-md grid-sm">
      <div className="item">
        <div className="item__imagebox">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="item__detail">
          <h3>{item.name}</h3>
          <p>카테고리 : {item.category}</p>
          <p>수량 : {item.amount}</p>
          <p>{item.price}원</p>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
