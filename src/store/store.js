import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import DevTools from '../containers/DevToolContainer';
import rootReducers from '../reducers';

const loggerMiddleware = createLogger();

const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  DevTools.instrument(),
);

export default function configStore() {
  const store = enhancer(createStore)(rootReducers, {});
  return store;
}
