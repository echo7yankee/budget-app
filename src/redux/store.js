import { createStore } from "redux";
import { combineReducers } from "redux";
import budgetReducer from "./reducers/budgetReducer";

const reducers = combineReducers({
  budget: budgetReducer
});

const store = createStore(reducers);

export default store;
