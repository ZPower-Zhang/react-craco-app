import { Map } from 'immutable';
// import Immutable from 'immutable';
import * as user from './action-type';

const defaultState = Map({
  userInfo: {}, // 用户信息
  isLogin: false
})

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case user.SET_USER:
      return state.set('userInfo', payload);
    case user.SET_LOGIN:
      return state.set('isLogin', payload);
    default:
      return state;
  }
}

export default reducer
