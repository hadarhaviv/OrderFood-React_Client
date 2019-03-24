import { all } from "redux-saga/effects";
import restaurantsSagas from "./restaurants";
import ordersSagas from "./orders";
import authSagas from "./auth";

export default function* rootSaga() {
  yield all([...restaurantsSagas, ...ordersSagas, ...authSagas]);
}
