import { combineReducers } from "redux";
import restaurants from "./restaurants";
import orders from "./orders";
import auth from "./auth";

export default combineReducers({ restaurants, orders, auth });
