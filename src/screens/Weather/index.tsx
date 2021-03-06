import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image, View, ImageBackground} from 'react-native';
import GetLocation from 'react-native-get-location';
import {API_WEATHER_KEY} from '../../keys/api';
import api from '../../services/api';
import {isDayTime} from '../../utils/isDayTime';

import day from '../../assets/images/day.jpg';
import night from '../../assets/images/night.jpg';

// import RefreshButton from '../../components/RefreshButton';

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
  RefreshButton,
} from './styles';

interface apiResponseProps {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const Weather = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState<apiResponseProps>(null);

  const getLocation = () => {
    setLoading(true);
    setLatitude(0);
    setLongitude(0);

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
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      api
        .get(
          `weather?lat=${latitude}&lon=${longitude}&appid=${API_WEATHER_KEY}&units=metric&lang=pt_br`,
        )
        .then(response => {
          console.log('SUNSET', response.data.sys.sunset);
          setWeatherInfo(response.data);
          setLoading(false);
        });
    }
  }, [latitude, longitude]);

  return (
    <Container>
      <ImageBackground
        source={isDayTime ? day : night}
        resizeMode="cover"
        style={{flex: 1}}>
        <Header>
          <Title>Desafio Builders</Title>
        </Header>
        {loading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        ) : (
          <>
            {weatherInfo && (
              <Content isDayTime={isDayTime}>
                <CityInfo isDayTime={isDayTime}>
                  {weatherInfo.name}, {weatherInfo.sys.country}
                </CityInfo>
                <SmallText isDayTime={isDayTime}>
                  {weatherInfo.weather[0].description}
                </SmallText>
                <BigText isDayTime={isDayTime}>
                  {Math.round(weatherInfo.main.temp)}??C
                </BigText>
                <Image
                  style={{width: 150, height: 150, alignSelf: 'center'}}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`,
                  }}
                />
                <RowContent>
                  <MaxAndMin color="#d9534f">
                    M??x {Math.round(weatherInfo.main.temp_min)}??C
                  </MaxAndMin>
                  <MaxAndMin color="#0275d8">
                    M??n {Math.round(weatherInfo.main.temp_max)}??C
                  </MaxAndMin>
                </RowContent>
              </Content>
            )}
          </>
        )}

        <RefreshButton title="Atualizar" onPress={getLocation} />
      </ImageBackground>
    </Container>
  );
};

export default Weather;
