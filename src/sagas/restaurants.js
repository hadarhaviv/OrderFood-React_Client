import { takeEvery, call, fork, put } from "redux-saga/effects";
import Types from "../actions/actionTypes";
import * as actions from "../actions/restaurants";
import * as api from "../api/restaurants";

function* getRestaurants(action) {
  try {
    const result = yield call(api.getRestaurantsApi);
    yield put(actions.getRestaurantsSuccess(result.data));
  } catch (err) {
    console.log(err);
  }
}

function* getRestaurantById(action) {
  try {
    const result = yield call(api.getRestaurantByIdApi, action.id);
    yield put(actions.getRestaurantByIdSuccess(result.data));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetRestaurantsRequest() {
  yield takeEvery(Types.GET_RESTAURANTS, getRestaurants);
}

function* watchGetRestaurantById() {
  yield takeEvery(Types.GET_RESTAURANT_BY_ID, getRestaurantById);
}

const restaurantsSagas = [fork(watchGetRestaurantsRequest),fork(watchGetRestaurantById)];

export default restaurantsSagas;
