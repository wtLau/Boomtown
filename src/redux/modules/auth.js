// Action Constants
const LOGIN_AUTH = 'LOGIN_AUTH';
const LOGIN_AUTH_ERROR = 'LOGIN_AUTH_ERROR';
// const SHOW_JOIN_MODAL = 'SHOW_JOIN_MODAL';

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

// export function loadJoinModal(joinModal) {
//   return {
//     type: SHOW_JOIN_MODAL,
//     payload: joinModal
//   };
// }

// Reducers
const initialState = {
  loginAuth: false,
  showLoginError: false,
  // showJoinModal: false
};

export function LoginRenderer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_AUTH:
    return { ...state, loginAuth: action.payload };
  case LOGIN_AUTH_ERROR:
    return { ...state, showLoginError: action.payload };
  // case SHOW_JOIN_MODAL:
  //   return { ...state, showJoinModal: action.payload };
  default:
    return state;
  }
}
