import { createStore } from "redux";
import historyReducers from "./reducers/historyReducers.js";

const store = createStore(historyReducers);

export default store;
