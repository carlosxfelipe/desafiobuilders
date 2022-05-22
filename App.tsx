import React from 'react';
import {StatusBar} from 'react-native';

import Weather from './src/screens/Weather';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF000" barStyle="dark-content" />
      <Weather />
    </>
  );
};

export default App;
