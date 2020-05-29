import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { Container, ProductList, Product, ProductImage, ProductTitle, ProductPrice, ButtonText, Amount, AddButton, ProductAmount } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

export default function Home() {


  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {}));

  const dispacth = useDispatch();

  useEffect(() => {

    async function loadProduct() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProduct();
  }, []);



  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddButton onPress={() => dispacth(CartActions.addToCartRequest(item.id))}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <Amount>{amount[item.id] || 0}</Amount>
              </ProductAmount>
              <ButtonText>ADICIONAR</ButtonText>
            </AddButton>
          </Product>
        )}
      >
      </ProductList>
    </Container >

  )
}