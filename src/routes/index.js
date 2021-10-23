import React from "react"
import { Redirect } from "react-router-dom"

// Brand Component
import ListBrand from '../pages/OverView/ListBrand/ListBrand'
import AnalyticsBrand from '../pages/OverView/ListBrand/AnalyticsBrand'




// User profile
import UserProfile from "../pages/Authentication/UserProfile"
import UserList from '../pages/User/UserList'
import AddUser from '../pages/User/AddUser'

//Projects



//Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index"
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail"
import ProductList from "../pages/Ecommerce/ProductList/index"

import EcommerceCart from "../pages/Ecommerce/EcommerceCart"
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout"
import EcommerceShops from "../pages/Ecommerce/EcommerceShops/index"
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct"
//Geo Information
import AddGeo from '../pages/GeoInformation/AddGeo'
import AddRoute from '../pages/GeoInformation/AddRoute'
import AddArea from '../pages/GeoInformation/AddArea'
import AddRegion from '../pages/GeoInformation/AddRegion'
import AddTerritory from '../pages/GeoInformation/AddTerritory'
import ListArea from '../pages/GeoInformation/ListArea'
import ListRegion from '../pages/GeoInformation/ListRegion'
import ListTerritory from '../pages/GeoInformation/ListTerritory' 
//Store Information
import StoreList from '../pages/StoreDetails/StoreList'
import StoreAdd from '../pages/StoreDetails/StoreAdd'
import StoreInfo from '../pages/StoreDetails/StoreInfo'

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Login2 from "../pages/AuthenticationInner/Login2"
import Register1 from "../pages/AuthenticationInner/Register"
import Register2 from "../pages/AuthenticationInner/Register2"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPwd2"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"

// Dashboard
import Dashboard from "../pages/Dashboard/index"



//Office
import InfoOffice from '../pages/Office/InfoOffice'
import AddOffice from '../pages/Office/AddOffice'








//Blog

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

 

  //profile
  { path: "/profile", component: UserProfile },



  
  

  //Ecommerce
  // { path: "/ecommerce-products/:id", component: EcommerceProducts },
  { path: "/ecommerce-products", component: EcommerceProducts },
  { path: "/ecommerce-product-details/:id", component: EcommerceProductDetail },

  { path: "/ecommerce-productlist", component: ProductList },
 
  { path: "/ecommerce-cart", component: EcommerceCart },
  { path: "/ecommerce-checkout", component: EcommerceCheckout },
  { path: "/ecommerce-shops", component: EcommerceShops },
  { path: "/ecommerce-add-product", component: EcommerceAddProduct },


 
//OverView-Information

{ path: "/list-brand", component: ListBrand  },
{ path: "/analytic-brand", component: AnalyticsBrand   },
{ path: "/list-unit", component: ListBrand  },
 
//Office-Information

{ path: "/info-office", component: InfoOffice  },
{ path: "/add-office", component: AddOffice  },
  
  

  // Geo Information
  { path: "/Geo-add", component: AddGeo  },
  { path: "/routes-add", component: AddRoute  },
  { path: "/add-area", component: AddArea  },
  { path: "/add-region", component: AddRegion  },
  { path: "/add-territory", component: AddTerritory  },
  { path: "/list-area", component: ListArea  },
  { path: "/list-region", component: ListRegion  },
  { path: "/list-territory", component: ListTerritory  },
 
 
 

  // Store Information
  { path: "/store-list", component: StoreList  },
  { path: "/add-newStore", component: StoreAdd  },
  { path: "/info-store", component: StoreInfo  },

  // User
  { path: "/user-list", component: UserList  },
  { path: "/add-user", component: AddUser  },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },


  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-login-2", component: Login2 },

  { path: "/pages-register", component: Register1 },
  { path: "/pages-register-2", component: Register2 },

  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/pages-recoverpw-2", component: Recoverpw2 },

  { path: "/pages-forgot-pwd", component: ForgetPwd1 },
  { path: "/pages-forgot-pwd-2", component: ForgetPwd2 },

  { path: "/auth-lock-screen", component: LockScreen },
  { path: "/auth-lock-screen-2", component: LockScreen2 },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/page-confirm-mail-2", component: ConfirmMail2 },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-email-verification-2", component: EmailVerification2 },
  { path: "/auth-two-step-verification", component: TwostepVerification },
  { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
]

export { authProtectedRoutes, publicRoutes }
