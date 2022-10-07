import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import data from "../modules/data";

const rootReducer = combineReducers({ counter, data });
const store = createStore(rootReducer);

export default store;
