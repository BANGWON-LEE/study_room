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
    ({ bd_idx, bd_title,  mem_userid,  bd_regDate, bd_recommand }) => ({ bd_idx, bd_title,  mem_userid,  bd_regDate, bd_recommand })
);

const boardListSaga = createRequestSaga(LIST_BOARD, menuAPI.boardList);
export function* boardListsSaga(){
    yield takeLatest(LIST_BOARD, boardListSaga);
}



const initialState = {
    
    bd_idx: 0,
    bd_title: '',  
    mem_userid: '',  
    bd_regDate: '', 
    bd_recommand: 0
    
}

const boardList = handleActions(
    {
        [LIST_BOARD_SUCCES] : (state, { payload: boardList}) => ({
            ...state,
            boardList,
        }),
        [LIST_BOARD_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default boardList;