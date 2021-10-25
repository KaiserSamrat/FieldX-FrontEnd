import {
  LOGIN_SUCCESS, LOGIN_USER,
  LOGIN_USER_ERROR, LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SOCIAL_LOGIN
} from "./actionTypes"

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}

export const loginSuccess = (username, token, email, userrole) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { username, token, email, userrole },
  }
}

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const loginUserError = () => ({
  type: LOGIN_USER_ERROR,
  payload: {},
})

export const socialLogin = (data, history, type) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, type },
  }
}