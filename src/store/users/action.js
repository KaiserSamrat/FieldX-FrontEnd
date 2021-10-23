import {
    ADD_USER_FAIL,
    ADD_USER_SUCCESS,
    ADD_NEW_USER,
} from './actionTypes.js'

export const addNewUser = (data, history) => ({
    type: ADD_NEW_USER,
    payload: { data, history },
  })
  
  export const addUserSuccess = data => ({
    type: ADD_USER_SUCCESS,
    payload: data,
  })
  
  export const addUserFail = error => ({
    type: ADD_USER_FAIL,
    payload: error,
  })