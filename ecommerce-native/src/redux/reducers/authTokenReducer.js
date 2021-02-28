import {AUTH_TOKEN} from '../types';

const INITIAL_STATE = {
  token: null,
};

export const authTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return {
        token: action.payload.token,
      };

    default:
      return state;
  }
};
