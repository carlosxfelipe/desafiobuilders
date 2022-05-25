import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

interface MaxAndMinProps {
  color: string;
}

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

export const Title = styled.Text`
  color: #000000;
  font-size: 24px;
  justify-content: center;
  align-items: center;
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
