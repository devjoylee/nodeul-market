import React from 'react';
import { Container } from '../Container';
import type { iItemDetail } from '../../App';
import { Item } from './Item';

interface InventoryProps {
  inventoryItems: iItemDetail[];
  addToCart: (clickedItem: iItemDetail) => void;
}

export function Inventory({ inventoryItems, addToCart }: InventoryProps) {
  return (
    <main className="inventory">
      <Container margin>
        <div className="item-list">
          {inventoryItems.map((item) => (
            <Item key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </Container>
    </main>
  );
}
