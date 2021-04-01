import React from 'react';

export function Header() {
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
      <button className="header__cartbtn">CART</button>
    </header>
  );
}
