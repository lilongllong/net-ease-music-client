import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducers from "../reducers";

const enhancer = compose(
    applyMiddleware(thunkMiddleware)

);

export default function configStore(){
    const store = enhancer(createStore)(rootReducers, {});
    return store;
};
