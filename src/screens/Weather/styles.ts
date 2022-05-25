import styled from 'styled-components/native';

interface MaxAndMinProps {
  color: string;
}

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ffcc00;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
`;

export const MaxAndMin = styled.Text<MaxAndMinProps>`
  align-items: center;
  color: ${({color}) => color || 'black'};
  font-size: 24px;
`;

export const CityInfo = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
`;

export const SmallText = styled.Text`
  color: #000000;
  font-size: 14px;
  text-align: center;
`;

export const BigText = styled.Text`
  color: #000000;
  font-size: 72px;
  text-align: center;
`;

export const RowContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

// criar posteriormente um componente RefreshButton
export const RefreshButton = styled.Button.attrs({
  color: 'black',
})``;
