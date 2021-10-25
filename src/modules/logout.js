import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] =
  createRequestActionTypes("logout/LOGOUT");
export const logouts = createAction(LOGOUT, ({ mem_userid }) => ({
  mem_userid,
}));

const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
export function* logoutsSaga() {
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  mem_userid: "",
};

const logout = handleActions(
  {
    [LOGOUT_SUCCESS]: (state, { payload: logout }) => ({
      ...state,
      logoutError: null,
      logout,
    }),
    [LOGOUT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      logoutError: error,
    }),
  },
  initialState
);

export default logout;
