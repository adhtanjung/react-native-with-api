import {AUTH_FAILED, AUTH_LOGIN, AUTH_START} from '../types';

const INITIAL_STATE = {
  id: null,
  email: '',
  isSignedIn: false,
  roleId: 0,
  loading: false,
  error: false,
  errorMessage: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOGIN:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        isSignedIn: true,
        loading: false,
        error: false,
        errorMessage: '',
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.err,
      };
    default:
      return state;
  }
};
