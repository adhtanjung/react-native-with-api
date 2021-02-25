import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUp, Login, PhoneAuth, GoogleAuth} from './src/screens';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

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
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <PhoneAuth /> */}
        <GoogleAuth />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
