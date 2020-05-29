import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDetails,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductSubtotal,
  ProductAmount,
  TotalContainer,
  TotalText,
  TotalAmount,
  OrderButton,
  OrderText
} from './styles';

export default function Cart() {

  const dispatch = useDispatch();

  const total = useSelector(state =>
    formatPrice(

      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    )
  )

  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price)
    }))
  )


  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }


  return (
    <Container>
      {products.length ?

        <>
          <Products >
            {products.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => dispatch(CartActions.removeFromCart(product.id))}>
                    <Icon
                      name="delete-forever" size={30}
                      color={"#7159c1"}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={30}
                      color={"#7159c1"}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={30}
                      color={"#7159c1"}
                    />
                  </ProductControlButton>
                  <ProductSubtotal> {product.subtotal} </ProductSubtotal>
                </ProductControls>
              </Product>
            ))}

            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{total}</TotalAmount>
            </TotalContainer>
          </Products>
          <OrderButton>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </OrderButton>
        </>
        :
        <TotalText>CARRINHO VAZIO</TotalText>
      }
    </Container>
  )
}