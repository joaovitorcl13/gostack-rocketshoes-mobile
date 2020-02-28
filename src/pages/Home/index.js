import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ProductList, Product, ProductImage, ProductTitle, ProductPrice, ButtonText, Amount, AddButton, ProductAmount } from './styles';


export default function Home() {
  return (
    <Container>
      <ProductList>
        <Product>
          <ProductImage source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" }} />
          <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
          <ProductPrice>R$176,90</ProductPrice>
          <AddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <Amount>0</Amount>
            </ProductAmount>
            <ButtonText>ADICIONAR</ButtonText>
          </AddButton>
        </Product>
      </ProductList>
    </Container>

  )
}
