import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//E-commerce
import ecommerce from "./e-commerce/reducer"

// Users
import UserReducer from "./users/reducers"





//Dashboard 
import Dashboard from "./dashboard/reducer";

//Dasboard saas
import DashboardSaas from "./dashboard-saas/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  ecommerce,
  Dashboard,
  UserReducer,
  DashboardSaas
})

export default rootReducer