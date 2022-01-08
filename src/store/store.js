import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer.js"

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger)
}

const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);