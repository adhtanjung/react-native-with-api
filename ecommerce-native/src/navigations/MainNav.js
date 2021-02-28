import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {Home} from '../screens';
import {AuthStack, TabStack} from '.';
import {keepLoginAction} from '../redux/actions';

const MainNav = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.authToken);
  useEffect(() => {
    if (token) {
      dispatch(keepLoginAction(token));
    }
  }, [dispatch, token]);

  return <>{token ? <TabStack /> : <AuthStack />}</>;
  // if (token) {
  //   return <Home />;
  // } else {
  //   return <AuthStack />;
  // }
};

export default MainNav;

const styles = StyleSheet.create({});
