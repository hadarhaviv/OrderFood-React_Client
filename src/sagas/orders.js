import { takeEvery, call, fork, put } from "redux-saga/effects";
import Types from "../actions/actionTypes";
import * as api from "../api/orders";

function* submitOrder(action) {
  try {
    yield call(api.submitOrderApi, action.order);
  } catch (e) {
    console.log(e);
  }
}

function* watchSubmitOrder() {
  yield takeEvery(Types.SUBMIT_ORDER, submitOrder);
}

const ordersSagas = [fork(watchSubmitOrder)];

export default ordersSagas;
