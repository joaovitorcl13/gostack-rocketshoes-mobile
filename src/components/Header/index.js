import React from 'react';
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeButton, CartButton, Logo, Container, CartAmount } from './styles';

export default function Header({ navigation }) {

  const cartSize = useSelector(state =>
    state.cart.length
  )

  return (
    <Container>
      <HomeButton onPress={() => navigation.navigate('Home')} >
        <Logo />
      </HomeButton>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={28} />
        <CartAmount>{cartSize}</CartAmount>
      </CartButton>
    </Container>
  );
}