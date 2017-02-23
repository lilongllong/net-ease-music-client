import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevToolContainer';
import reduxPromise from 'redux-promise';

const loggerMiddleware = createLogger();

const enhancer = compose(
  applyMiddleware(reduxPromise, loggerMiddleware),
  DevTools.instrument(),
);

exports.default = composeWithDevTools(enhancer);
module.exports = exports.default;
