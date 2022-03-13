import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const appReducer = combineReducers({});

const middlewares = applyMiddleware(thunk, logger);
export const store = createStore(middlewares);
