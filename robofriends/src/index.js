import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';
import App from "./containers/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

const logger = createLogger();
const rootReducers = combineReducers({
    searchRobots,
    requestRobots
})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

serviceWorker.register();
