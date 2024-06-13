// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

