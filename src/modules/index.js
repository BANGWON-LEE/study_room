import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import users, { usersSaga } from "./users";
import logout, { logoutsSaga } from "./logout";
import seat, { seatsSaga } from "./seat";
import zones, { zonesSaga } from "./zones";
import userInfo, { userInfosSaga } from "./userInfo";
import boardWrite,{boardWritesSaga} from "./boardWrite";
import boardList, {boardListsSaga} from "./boardList";

const rootReducer = combineReducers({
  auth,
  users,
  logout,
  seat,
  zones,
  userInfo,
  boardWrite,
  boardList
});

export function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga(),
    logoutsSaga(),
    seatsSaga(),
    zonesSaga(),
    userInfosSaga(),
    boardWritesSaga(),
    boardListsSaga(),
  ]);
}

export default rootReducer;
