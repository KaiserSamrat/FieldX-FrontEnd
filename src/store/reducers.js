import { combineReducers } from "redux"
import ForgetPassword from "./auth/forgetpwd/reducer"
// Authentication
import Login from "./auth/login/reducer"
import LoginError from "./auth/loginError/reducer"
import Profile from "./auth/profile/reducer"
import Account from "./auth/register/reducer"
//Dashboard 
import Dashboard from "./dashboard/reducer"
//E-commerce
import ecommerce from "./e-commerce/reducer"
// Front
import Layout from "./layout/reducer"
// Users
import UserReducer from "./users/reducers"










const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  LoginError,
  Account,
  ForgetPassword,
  Profile,
  ecommerce,
  Dashboard,
  UserReducer,
 
})

export default rootReducer
