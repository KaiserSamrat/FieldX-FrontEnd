import { call, delay, put, takeEvery } from "redux-saga/effects"
import{addUser} from '../../helpers/backend_helper'
import{ ADD_NEW_USER,GET_USER, GET_USERS,} from './actionTypes.js'
import {  addUserFail, addUserSuccess, getUserFail, getUsersFail,
  getUsersSuccess, getUserSuccess} from "./action"



  function* fetchUsers() {
    try {
      delay(500)
      const response = yield call(getUsers)
      yield put(getUsersSuccess(response))
    } catch (error) {
      yield put(getUsersFail(error))
    }
  }
  
  function* fetchUser({ payload: id }) {
    try {
      delay(500)
      const response = yield call(getUser, id)
      yield put(getUserSuccess(response))
    } catch (error) {
      yield put(getUserFail(error))
    }
  }

function* onAddNewUser({ payload: { data, history } }) {

  try {
    const response = yield call(addUser, data)
    yield put(addUserSuccess(response))
    console.log('hi')
    history.push("/")
  } catch (error) {
    console.log(error.response)
    if (!error.response.data.message) {
      history.push("/")
    }
    let message = error.response.data.message

    // console.log("error message,", error.response.data.message)
    yield put(addUserFail(message))
  }
}
  
function* UserSaga() {

  yield takeEvery(ADD_NEW_USER, onAddNewUser)
}

export default UserSaga
