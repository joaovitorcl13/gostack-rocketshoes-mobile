import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeButton, CartButton, Logo, Container, CartAmount } from './styles';

export default function Header() {
  return (
    <Container>
      <HomeButton>
        <Logo />
      </HomeButton>
      <CartButton>
        <Icon name="shopping-basket" color="#fff" size={28} />
        <CartAmount>0</CartAmount>
      </CartButton>
    </Container>
  );
}
