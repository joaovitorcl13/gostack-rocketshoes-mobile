import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const ProductList = styled.View``;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  width: 270px;
`;

export const ProductImage = styled.Image`
  height: 250px;
  width: 250px;
`;

export const ProductTitle = styled.Text`
 font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const AddButton = styled.TouchableOpacity`
 background: #7159c1;
 flex-direction: row;
 align-items: center;
 border-radius: 4px;
 margin-top: auto;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.03, "#7159c1")};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  padding: 12px;
  align-items: center;
`;

export const Amount = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;