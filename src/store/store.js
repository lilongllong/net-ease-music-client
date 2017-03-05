import { createStore } from 'redux';
import rootReducers from '../reducers';

const enhancer = require('./enhancer.dev.js');

export default function configStore(initState = {}) {
  return enhancer(createStore)(rootReducers, initState);
}
