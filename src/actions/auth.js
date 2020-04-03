/* eslint-disable no-use-before-define */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const requestLogin = () => ({
  type: LOGIN_REQUEST,
});

const receiveLogin = () => ({
  type: LOGIN_SUCCESS,
});

// const loginError = () => {
//   return {
//     type: LOGIN_FAILURE
//   };
// };

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
});

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
});

// const logoutError = () => {
//   return {
//     type: LOGOUT_FAILURE
//   };
// };

const verifyRequest = () => ({
  type: VERIFY_REQUEST,
});

const verifySuccess = () => ({
  type: VERIFY_SUCCESS,
});

export const loginUser = () => (dispatch) => {
  dispatch(requestLogin());
  return mockAPICall().then(() => {
    dispatch(receiveLogin());
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  return mockAPICall().then(() => {
    dispatch(receiveLogout());
  });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  return mockAPICall().then(() => {
    dispatch(verifySuccess());
  });
};

const mockAPICall = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('anything');
  }, 5000);
});
