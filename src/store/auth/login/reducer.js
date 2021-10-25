
import {
  LOGIN_SUCCESS, LOGIN_USER, LOGIN_USER_ERROR, LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from "./actionTypes"

const initialState = {
  loading: false,
  username: "",
  token: "",
  email: "",
  userrole: "",
  error: "",
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: "",
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        email: action.payload.email,
        userrole: action.payload.userrole,
        loading: false,
        error: "",
      }
      break
    case LOGIN_USER_ERROR:
      state = {
        ...state,
        username: "",
        token: "",
        email: "",
        userrole: "",
        loading: false,
      }
      break
    case LOGOUT_USER:
      state = {
        ...state,
        username: "",
        token: "",
        email: "",
        userrole: "",
      }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break

    default:
      state = state
      break
  }
  return state
}

export default login