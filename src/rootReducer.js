import { combineReducers } from "redux";
import todosReducer from "./components/reducers";

export default combineReducers({ todos: todosReducer });
