import { post } from "./api_helper"
import * as url from "./url_helper"
export const addUser = data => post(url.USERS_DATA, data)

export const login = (email, password) => post(url.LOGIN_URL, {email, password})

