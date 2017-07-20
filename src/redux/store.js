import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import client from '../config/apolloClient';
import combineReducers from './combine-reducer';


export default createStore(
  combineReducers,
  composeWithDevTools(
    applyMiddleware(
    logger,
    thunk,
    client.middleware()
  )
  )
);

