import React from 'react';
import type { iItemDetail } from '../../App';

interface ItemProps {
  item: iItemDetail;
}

export function Item({ item }: ItemProps) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>카테고리 : {item.category}</p>
      <p>수량 : {item.amount}</p>
      <p>{item.price}원</p>
      <p>{item.description}</p>
      <img src={item.image} alt={item.name} />
    </div>
  );
}
