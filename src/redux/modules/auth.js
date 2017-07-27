// Action Constants
const LOGIN_AUTH = 'LOGIN_AUTH';
const LOGIN_AUTH_ERROR = 'LOGIN_AUTH_ERROR';

// Action Creators
export const loadLoginAuth = (userLogin) => {
  return {
    type: LOGIN_AUTH,
    payload: userLogin
  };
};

export const showLoginError = (displayErrorLogin) => {
  return {
    type: LOGIN_AUTH_ERROR,
    payload: displayErrorLogin
  };
};

// Reducers
const initialState = {
  loginAuth: false,
  showLoginError: false,
};

export function LoginRenderer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_AUTH:
    return { ...state, loginAuth: action.payload };
  case LOGIN_AUTH_ERROR:
    return { ...state, showLoginError: action.payload };
  default:
    return state;
  }
}
