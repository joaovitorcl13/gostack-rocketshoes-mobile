import styled from 'styled-components/native';

import logo from '../../assets/images/Logo.png';

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
  height: 80px;
  background:  #191920;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const HomeButton = styled.TouchableOpacity`

`;
export const CartButton = styled.TouchableOpacity`

`;
export const CartAmount = styled.Text`
  position: absolute;
  padding: 2px;
  background: #7159c1;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 10px;
  top: -8px;
  right: -8px;
  text-align: center;
  overflow: hidden;
`;