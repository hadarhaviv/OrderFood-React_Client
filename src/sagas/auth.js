import { takeEvery, call, fork, put } from "redux-saga/effects";
import Types from "../actions/actionTypes";
import * as api from "../api/auth";
import * as actions from "../actions/auth";

function* userLogin(action) {
  try {
    const result = yield call(api.userLoginApi, action.credentials);
    yield put(actions.loginSuccess(result.data.token));
  } catch (e) {
    console.log(e);
  }
}

function* adminLogin(action) {
  try {
    const result = yield call(api.adminLoginApi, action.credentials);
    yield put(actions.loginSuccess(result.data));
  } catch (e) {
    console.log(e);
  }
}

function* watchUserLogin() {
  yield takeEvery(Types.USER_LOGIN, userLogin);
}

function* watchAdminLogin() {
  yield takeEvery(Types.ADMIN_LOGIN, adminLogin);
}

const authSagas = [fork(watchUserLogin), fork(watchAdminLogin)];

export default authSagas;
