import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import users, { usersSaga } from "./users";
import logout, { logoutsSaga } from "./logout";
import seat, { seatsSaga } from "./seat";
import zones, { zonesSaga } from "./zones";
import userInfo, { userInfosSaga } from "./userInfo";

const rootReducer = combineReducers({
  auth,
  users,
  logout,
  seat,
  zones,
  userInfo,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga(),
    logoutsSaga(),
    seatsSaga(),
    zonesSaga(),
    userInfosSaga(),
  ]);
}

export default rootReducer;
