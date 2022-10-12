import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counter";
import data from "../modules/data";

// const rootReducer = combineReducers({ counter, data });
const store = configureStore({
	reducer: { counter, data },
});

export default store;
