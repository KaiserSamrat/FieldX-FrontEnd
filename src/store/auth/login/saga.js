import { call, put, takeEvery } from "redux-saga/effects"
import { login } from "../../../helpers/backend_helper"
//Include Both Helper File with needed methods
import { userError } from "../loginError/actions"
import { loginSuccess, loginUserError } from "./actions"
// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"





// const fireBaseBackend = getFirebaseBackend()

const loginWithEmailPasswordAsync = async (email, password) => {
  try {
    console.log('hello');
    const response = await login(email, password)
    console.log(response);
    return response
  } catch (error) {
    console.log("response from backend error", error.response.data)
    return error.response.data
  }
}
// const loginWithGoogle = async (email, fullname) => {
//   console.log("hello data", fullname, email)
//   try {
//     const response = await axiosGoogleLogin(email, fullname)
//     console.log("response", response)
//     return response.data
//   } catch (error) {
//     console.log("error data", error)
//     return error.response.data
//   }
// }

function* loginUser({ payload: { user, history } }) {
  const { email, password} = user
  console.log(email, password);
    try {
      console.log("from 22 line", email, password)

      const loginUserResponse = yield call(
        loginWithEmailPasswordAsync,
        email,
        password
      )

      if (loginUserResponse.status === "success") {
        console.log("user data", loginUserResponse)
        yield put(
          loginSuccess(
            loginUserResponse.user.name,
            loginUserResponse.token,
            loginUserResponse.user.email,
            loginUserResponse.user.role
          )
        )
        console.log('test');
         history.push("/dashboard")
        // if (loginUserResponse.user.UserLogin.data.role == "admin") {
        //   history.push("/admindashboard")
        // } else if (loginUserResponse.user.UserLogin.data.role == "teacher") {
        //   history.push("/teacherdashboard")
        // } else if (loginUserResponse.user.UserLogin.data.role == "student") {
        //   history.push("/studentdashboard")
        // }
      } else {
        console.log("data error", loginUserResponse.message)
        yield put(userError(loginUserResponse.message))
        yield put(loginUserError())
        // yield put(userError())
      }
    } catch (err) {
      console.log("error from here", err)
    }
  }
  // try {

  //   if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
  //     const response = yield call(
  //       fireBaseBackend.loginUser,
  //       user.email,
  //       user.password
  //     )
  //     yield put(loginSuccess(response))
  //   } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
  //     const response = yield call(postJwtLogin, {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     localStorage.setItem("authUser", JSON.stringify(response))
  //     yield put(loginSuccess(response))
  //   } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
  //     const response = yield call(postFakeLogin, {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     localStorage.setItem("authUser", JSON.stringify(response))
  //     yield put(loginSuccess(response))
  //   }
  //   history.push("/dashboard")
  // } catch (error) {
  //   yield put(apiError(error))
  // }


function* logoutUser({ payload }) {
  try {
    console.log("hello data", payload)
    yield put(loginSuccess())
    yield put(userError())

    // window.location.reload("/login")
    history.push("/login")
  } catch (error) {
    // yield put(apiError(error))
    console.log("error data", error)
  }
}

// // function* socialLogin({ payload: { data, history, type } }) {
// //   try {
// //     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
// //       const fireBaseBackend = getFirebaseBackend()
// //       const response = yield call(fireBaseBackend.socialLoginUser, data, type)
// //       localStorage.setItem("authUser", JSON.stringify(response))
// //       yield put(loginSuccess(response))
// //     } else {
// //       const response = yield call(postSocialLogin, data)
// //       localStorage.setItem("authUser", JSON.stringify(response))
// //       yield put(loginSuccess(response))
// //     }
// //     history.push("/dashboard")
// //   } catch (error) {
// //   }
// }

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  // yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
