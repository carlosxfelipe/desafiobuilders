import styled from 'styled-components/native';

interface MaxAndMinProps {
  color: string;
}

interface ContentProps {
  isDayTime: boolean;
}

export const Container = styled.View`
  background-color: whitesmoke;
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ffcc00;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Content = styled.View<ContentProps>`
  flex: 1;
  margin: 20px;
  background-color: ${({isDayTime}) =>
    isDayTime ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 10px;
`;

export const MaxAndMin = styled.Text<MaxAndMinProps>`
  align-items: center;
  color: ${({color}) => color || 'black'};
  font-size: 24px;
`;

export const CityInfo = styled.Text<ContentProps>`
  color: ${({isDayTime}) => (isDayTime ? 'black' : 'white')};
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
`;

export const SmallText = styled.Text<ContentProps>`
  color: ${({isDayTime}) => (isDayTime ? 'black' : 'white')};
  font-size: 14px;
  text-align: center;
`;

export const BigText = styled.Text<ContentProps>`
  color: ${({isDayTime}) => (isDayTime ? 'black' : 'white')};
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
