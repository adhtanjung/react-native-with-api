import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {TextInput, withTheme, Button, IconButton} from 'react-native-paper';

const Login = ({theme}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = theme;

  const handleInput = (e) => {
    console.log(e);
  };

  return (
    <Grid style={{backgroundColor: colors.background}}>
      <Row size={1}>
        <Text style={[styles.biggerText, {color: colors.text}]}>Login</Text>
      </Row>
      <Row size={2} style={styles.body}>
        <View style={styles.input}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={{
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: colors.surface,
            }}
            theme={{colors: {placeholder: colors.placeholder}, roundness: 5}}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            style={{backgroundColor: colors.surface}}
            theme={{colors: {placeholder: colors.placeholder}, roundness: 5}}
            secureTextEntry={true}
          />
          <View style={styles.forgotPassword}>
            <Text
              style={{
                color: colors.text,
                fontFamily: 'metromed',
                fontSize: 18,
              }}>
              Forgot your password?
            </Text>
            <IconButton
              icon="arrow-right"
              color={colors.primary}
              size={30}
              onPress={() => console.log('to login')}
            />
          </View>
        </View>
      </Row>
      <Row size={1} style={styles.footer}>
        <View>
          <Button
            mode="text"
            color={colors.text}
            onPress={() => console.log('pressed')}
            style={[styles.btn, {backgroundColor: colors.primary}]}
            theme={{roundness: 30, fonts: 'light'}}
            labelStyle={{fontSize: 18}}>
            login
          </Button>
        </View>
      </Row>
    </Grid>
  );
};

export default withTheme(Login);

const styles = StyleSheet.create({
  biggerText: {
    fontFamily: 'metrosemibold',
    fontSize: 30,
  },
  input: {
    flexDirection: 'column',
  },
  body: {
    flexDirection: 'column',
    padding: 10,
  },
  btn: {
    fontFamily: 'metro',
    height: 60,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
  },
  forgotPassword: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
