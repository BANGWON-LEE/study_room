import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, {authSaga} from "./auth";
import users,  {usersSaga} from "./users";
import logout, {logoutsSaga} from "./logout";
import seat, {seatsSaga} from "./seat";
import zones, {zonesSaga} from "./zones";
//import check, {checksSaga} from "./check";



const rootReducer = combineReducers({
    auth,
    users,
    logout,
    seat,
    zones,
    //check,
  });
  
  export function* rootSaga() {
    yield all([authSaga(),usersSaga(),logoutsSaga(),seatsSaga(),zonesSaga()]);
  }
  
  export default rootReducer;

  
  