import React from 'react';
import {StatusBar} from 'react-native';

import Weather from './src/screens/Weather';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffcc00" barStyle="dark-content" />
      <Weather />
    </>
  );
};

export default App;
