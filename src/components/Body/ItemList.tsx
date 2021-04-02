import React from 'react';
import { Container } from '../Container';
import type { iItemDetail } from '../../App';
import { Item } from './Item';

interface ItemListProps {
  items: iItemDetail[];
}

export function ItemList({ items }: ItemListProps) {
  return (
    <Container margin>
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
