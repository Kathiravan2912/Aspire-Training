// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  category: categoryReducer,
});

export default rootReducer;
