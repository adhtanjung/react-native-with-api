import axios from 'axios';
import {local} from '../../localip';
import {AUTH_FAILED, AUTH_LOGIN, AUTH_START, AUTH_TOKEN} from '../types';

export const registerAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AUTH_START,
      });
      const res = await axios.post(`${local}/users/new`, payload);
      dispatch({
        type: AUTH_LOGIN,
        payload: res.data,
      });
      dispatch({
        type: AUTH_TOKEN,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const keepLoginAction = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AUTH_START,
      });
      const res = await axios.post(`${local}/users/keep-login`, {token});

      dispatch({
        type: AUTH_LOGIN,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};
