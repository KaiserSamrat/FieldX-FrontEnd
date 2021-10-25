import {
    ADD_USER_FAIL,
    ADD_USER_SUCCESS,
    ADD_NEW_USER,
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
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
  export const getUsers = () => ({
    type: GET_USERS,
  })
  
  export const getUsersSuccess = data => ({
    type: GET_USERS_SUCCESS,
    payload: data,
  })
  
  export const getUsersFail = error => ({
    type: GET_USERS_FAIL,
    payload: error,
  })
  export const getUser = id => ({
    type: GET_USER,
    payload: id,
  })
  
  export const LoadingUserAdd = isLoading => ({
    type: LOADING_ADD_USER,
    payload: isLoading,
  })
  
  export const getUserSuccess = data => ({
    type: GET_USER_SUCCESS,
    payload: data,
  })
  
  export const getUserFail = error => ({
    type: GET_USER_FAIL,
    payload: error,
  })