import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
// import produce from "immer";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [INFO, INFO_SUCCESS, INFO_FAILURE] =
  createRequestActionTypes("info/USERINFO");

export const Info = createAction(INFO, ({ mem_userid }) => ({ mem_userid }));

const userInfoSaga = createRequestSaga(INFO, authAPI.userInfo);

export function* userInfosSaga() {
  yield takeLatest(INFO, userInfoSaga);
}

const initialState = {
  userInfo: {
    mem_userid: "",
    mem_name: "",
    st_seatNumber: "",
    st_endDate: "",
  },
};

const userInfo = handleActions(
  {
    [INFO_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfoError: null,
      userInfo,
    }),
    [INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userInfoError: error,
    }),
  },
  initialState
);

export default userInfo;
