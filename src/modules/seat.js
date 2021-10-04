import { createAction, handleActions } from "redux-actions";
import {  takeLatest } from "redux-saga/effects";
// import produce from "immer";
import * as menuAPI from "../lib/api/menu";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";


const [SEAT, SEAT_SUCCESS, SEAT_FAILURE] = createRequestActionTypes(
    "seat/SEAT",
);

//   const INITIALIZE_FORM = "seat/INITIALIZE_FORM";

// export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);


export const seats = createAction(SEAT,({ st_mem_idx, st_endDate, st_seatNumber, mem_userid}) => ({st_mem_idx, st_endDate, st_seatNumber, mem_userid}));

const seatSaga = createRequestSaga(SEAT, menuAPI.seat);
export function* seatsSaga() {
  yield takeLatest(SEAT, seatSaga);
}

const initialState = {
    
  st_mem_idx:"",
  st_endDate:"",
  st_seatNumber:"",
  mem_userid:"", 
  
};

const seat = handleActions(
  {



    [SEAT_SUCCESS]: (state, { payload: seat }) => ({
        ...state,
        seatError: null,
        seat,
    }),
    [SEAT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        seatError: error,
    }),
  },
  initialState,
);


export default seat;

    
