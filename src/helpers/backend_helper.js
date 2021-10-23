import { del, get, patch, post } from "./api_helper"
import * as url from "./url_helper"
export const addUser = data => post(url.USERS_DATA, data)