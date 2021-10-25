import { USER_ERROR } from "./actionTypes"
//will do work leter
export const userError = message => ({
  type: USER_ERROR,
  payload: { message },
})
