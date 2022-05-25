import React, {useState, useEffect} from 'react';
import GetLocation from 'react-native-get-location';
import {API_WEATHER_KEY} from '../../keys/api';
import api from '../../services/api';

// import Componente from '../../components/Componente';

import {
  Container,
  Header,
  Title,
  Content,
  CityInfo,
  SmallText,
  BigText,
  RowContent,
  MaxAndMin,
} from './styles';

const Weather = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      api
        .get(
          `weather?lat=${latitude}&lon=${longitude}&appid=${API_WEATHER_KEY}&units=metric&lang=pt_br`,
        )
        .then(response => {
          setWeatherInfo(response.data);
          console.log(response.data);
        });
    }
  }, [latitude, longitude]);

  return (
    <Container>
      <Header>
        <Title>Desafio Builders</Title>
      </Header>
      {weatherInfo && (
        <Content>
          <CityInfo>
            {weatherInfo.name}, {weatherInfo.sys.country}
          </CityInfo>
          <SmallText>{weatherInfo.weather[0].description}</SmallText>
          <BigText>{Math.round(weatherInfo.main.temp)}°C</BigText>
          <RowContent>
            <MaxAndMin color="#d9534f">
              Máx {Math.round(weatherInfo.main.temp_min)}°C
            </MaxAndMin>
            <MaxAndMin color="#0275d8">
              Mín {Math.round(weatherInfo.main.temp_max)}°C
            </MaxAndMin>
          </RowContent>
        </Content>
      )}
    </Container>
  );
};

export default Weather;
