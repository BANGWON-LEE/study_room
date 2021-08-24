import { createAction, handleActions } from "redux-actions";
import {  takeLatest } from "redux-saga/effects";
// import produce from "immer";
import * as menuAPI from "../lib/api/menu";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";


const [TIME, TIME_SUCCESS, TIME_FAILURE] = createRequestActionTypes(
    "time/TIME",
);
export const times = createAction(TIME,({ st_endDate}) => ({st_endDate}));

const timeSaga = createRequestSaga(TIME, menuAPI.time);
export function* timesSaga() {
  yield takeLatest(TIME, timeSaga);
}

const initialState = {
   

    st_endDate:"", 
   
};

const time = handleActions(
  {
   
    [TIME_SUCCESS]: (state, { payload: time }) => ({
        ...state,
        timeError: null,
        time,
    }),
    [TIME_FAILURE]: (state, { payload: error }) => ({
        ...state,
        timeError: error,
    }),
  },
  initialState,
);


export default time;

    
