import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, {authSaga} from "./auth";
import users, {usersSaga} from "./users";
//import check, {checksSaga} from "./check";



const rootReducer = combineReducers({
    auth,
    users,
    //check,
  });
  
  export function* rootSaga() {
    yield all([authSaga(),usersSaga()]);
  }
  
  export default rootReducer;
  