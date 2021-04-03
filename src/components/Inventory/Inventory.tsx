import React from 'react';
import { Container } from '../Container';
import type { iItemDetail } from '../../App';
import { Item } from './Item';

interface ItemListProps {
  items: iItemDetail[];
  addToCart: (clickedItem: iItemDetail) => void;
}

export function ItemList({ items, addToCart }: ItemListProps) {
  return (
    <Container margin>
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </Container>
  );
}
