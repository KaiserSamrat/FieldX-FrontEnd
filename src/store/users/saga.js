import { call, delay, put, takeEvery } from "redux-saga/effects"
import{addUser} from '../../helpers/backend_helper'
import{ ADD_NEW_USER} from './actionTypes.js'
import {  addUserFail, addUserSuccess,} from "./action"

function* onAddNewUser({ payload: { data, history } }) {
   
    try {
      const response = yield call(addUser, data)
      yield put(addUserSuccess(response))
      console.log('heeello');
      // console.log(response);
       history.push("/")
    } catch (error) {
  
      console.log(error.response)
      if (!error.response) {
        history.push("/")
      } else {
        console.log('mmmm')
        let message = error.response.data.message
        // console.log("error message,", error.response.data.message)
        yield put(addUserFail(message))}
      
    }
  }
  
function* UserSaga() {

  yield takeEvery(ADD_NEW_USER, onAddNewUser)
}

export default UserSaga
