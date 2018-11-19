import Service from '@services/UserService';

export const actions = { LOGIN: 'LOGIN', LOGOUT: 'LOGOUT' };

function logInTrue(payload) {
  return {
    type: actions.LOGIN,
    payload
  };
}

function logIn(payload) {
  return dispatch => {
    Service(payload)
      .then(response => {
        if (response.ok) {
          dispatch({
            type: actions.LOGIN,
            payload: { loggedIn: true }
          });
        } else {
          throw new Error();
        }
      })
      .catch(() => {});
  };
}

function logOut() {
  return {
    type: actions.LOGOUT
  };
}

export default { logInTrue, logOut, logIn };
