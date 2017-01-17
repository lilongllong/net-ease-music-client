import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import DevTools from '../containers/DevToolContainer';
import rootReducers from '../reducers';

const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument(),
);

export default function configStore() {
    const store = enhancer(createStore)(rootReducers, {});
    return store;
}
