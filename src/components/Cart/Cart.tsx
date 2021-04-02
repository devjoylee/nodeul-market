import React from 'react';

export function Cart() {
  return (
    <div className="cart cart-open">
      <aside className="cart__drawer">
        <h1>My Cart</h1>
      </aside>
      <div className="cart__overlay"></div>
    </div>
  );
}
