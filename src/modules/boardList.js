import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as menuAPI from '../lib/api/menu';
import { takeLatest } from 'redux-saga/effects';


const [
    LIST_BOARD,
    LIST_BOARD_SUCCES,
    LIST_BOARD_FAILURE,    
] = createRequestActionTypes('list/BOARD_LIST');

export const list = createAction(
    LIST_BOARD,
    ({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate}) => ({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate})
);

const boardListSaga = createRequestSaga(LIST_BOARD, menuAPI.zone);
export function * boardListsSaga(){
    yield takeLatest(LIST_BOARD, boardListSaga);
}



const initialState = {
    boardList: null,
    error: null,
    
}

const boardList = handleActions(
    {
        [LIST_BOARD_SUCCES] : (state, { payload: listBoard}) => ({
            ...state,
            listBoard,
        }),
        [LIST_BOARD_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default boardList;