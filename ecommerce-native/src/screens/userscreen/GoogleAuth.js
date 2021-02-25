import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

const GoogleAuth = () => {
  const [CurrentUser, setCurrentUser] = useState('');
  const [user, setUser] = useState('');
  GoogleSignin.configure({
    webClientId:
      '746523598709-0o8e6a083bqb8qi4bmpa8sp3dqapql8r.apps.googleusercontent.com',
  });

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    setCurrentUser(currentUser);
    console.log(CurrentUser);
  };
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available');
      } else {
        // some other error happened
        console.log(error.code);
      }
    }
  };
  return (
    <>
      <Button title="Google Sign-In" onPress={signIn} />
      <Button title="get current user" onPress={getCurrentUser} />
    </>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({});
