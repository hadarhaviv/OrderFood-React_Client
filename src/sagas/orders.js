import { takeEvery, call, fork, put } from "redux-saga/effects";
import Types from "../actions/actionTypes";
import * as api from "../api/orders";
import * as actions from "../actions/order";

function* submitOrder(action) {
  try {
    yield call(api.submitOrderApi, action.order);
    yield put(actions.submitOrderSuccess());
  } catch (e) {
    console.log(e);
  }
}

function* watchSubmitOrder() {
  yield takeEvery(Types.SUBMIT_ORDER, submitOrder);
}

const ordersSagas = [fork(watchSubmitOrder)];

export default ordersSagas;
