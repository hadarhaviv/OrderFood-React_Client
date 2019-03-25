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

function* getRestaurantByOwner(action) {
  try {
    const result = yield call(api.getRestaurantByOwnerApi, action.id);
    yield put(actions.getRestaurantByOwnerSuccess(result.data));
  } catch (err) {
    console.log(err);
  }
}

function* updateResMenu(action) {
  console.log(action);
  try {
    const result = yield call(api.updateMenu, action.menu, action.id);
    yield put(actions.updateResMenuSuccess(result.data));
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

function* watchGetRestaurantByOwner() {
  yield takeEvery(Types.GET_RESTAURANT_BY_OWNER, getRestaurantByOwner);
}

function* watchUpdateMenu() {
  yield takeEvery(Types.UPDATE_MENU, updateResMenu);
}

const restaurantsSagas = [
  fork(watchGetRestaurantsRequest),
  fork(watchGetRestaurantById),
  fork(watchGetRestaurantByOwner),
  fork(watchUpdateMenu)
];

export default restaurantsSagas;
