import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
// import imgimg from '../../../../../assets/pexels-asa-dugger-1649896.jpg';
const Home = () => {
  return (
    <Grid style={styles.mainContainer}>
      <Row>
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri:
                'https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
            style={styles.image}>
            <Text style={styles.text}>New collections</Text>
          </ImageBackground>
        </View>
      </Row>
      <Row>
        <Col>
          <View style={styles.container}>
            <ImageBackground
              source={{
                uri:
                  'https://images.pexels.com/photos/1649896/pexels-photo-1649896.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
              }}
              style={styles.image}>
              <Text style={styles.text}>Women</Text>
            </ImageBackground>
          </View>
        </Col>
        <Col>
          <View style={styles.container}>
            <ImageBackground
              source={{
                uri:
                  'https://images.pexels.com/photos/6740710/pexels-photo-6740710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
              style={styles.image}>
              <Text style={styles.text}>Men</Text>
            </ImageBackground>
          </View>
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'metrobold',
    fontSize: 50,
    justifyContent: 'center',
    textAlign: 'center',
    textShadowColor: 'grey',
    textShadowRadius: 2,
  },
});
