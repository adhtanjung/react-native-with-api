import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUp, Login, PhoneAuth, GoogleAuth} from './src/screens';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/redux/configureStore';
import {MainNav} from './src/navigations';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EF3651',
    surface: '#2A2C36',
    text: '#F5F5F5',
    background: '#1E1F28',
    placeholder: '#ABB4BD',
  },
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            {/* <SignUp /> */}
            <MainNav />
            {/* <Login /> */}
            {/* <PhoneAuth /> */}
            {/* <GoogleAuth /> */}
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
