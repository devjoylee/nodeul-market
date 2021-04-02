import React from 'react';
import { Container } from '../Container';

export function Footer() {
  return (
    <div className="footer">
      <Container margin>
        <p className="footer__copyright">
          Copyright &copy; 2021 NODEUL MARKET. All rights reserved.
        </p>
      </Container>
    </div>
  );
}
