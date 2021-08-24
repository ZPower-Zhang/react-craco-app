// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as userReducer } from './user';

// 多个reducer合并
const cRducer = combineReducers({
  user: userReducer
});

export default cRducer;
