import * as user from './action-type';

export const setUser = payload => ({
  type: user.SET_USER,
  payload
})

export const setUserStatus = payload => ({
  type: user.SET_LOGIN,
  payload
})
