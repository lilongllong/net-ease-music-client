import { createStore } from 'redux';
import rootReducers from '../reducers';

// const enhancer = process.env.NODE_ENV !== 'production' ? require('./enhancer.dev.js') : require('./enhancer.js');

const enhancer = require('./enhancer.dev.js');

export default function configStore(initState = {}) {
  return enhancer(createStore)(rootReducers, initState);
}
// import { applyMiddleware, compose, createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
//
// import DevTools from '../containers/DevToolContainer';
// import rootReducers from '../reducers';
//
// const loggerMiddleware = createLogger();
//
// const enhancer = compose(
//   applyMiddleware(thunkMiddleware, loggerMiddleware),
//   DevTools.instrument(),
// );
//
// export default function configStore() {
//   const store = enhancer(createStore)(rootReducers, {});
//   return store;
// }
