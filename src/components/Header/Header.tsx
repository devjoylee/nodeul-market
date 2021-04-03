import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

interface HeaderProps {
  toggleCart: () => void;
}

export function Header({ toggleCart }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__logo">노들마켓</h1>
      <ul className="header__menu">
        <li>🧅</li>
        <li>🥕</li>
        <li>🧄</li>
        <li>🍎</li>
        <li>🥔</li>
      </ul>
      <button className="header__cartbtn" onClick={() => toggleCart()}>
        <TiShoppingCart />
      </button>
    </header>
  );
}
