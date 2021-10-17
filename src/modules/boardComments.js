import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as menuAPI from '../lib/api/menu';
import { takeLatest } from 'redux-saga/effects';


const [
    BOARDCOMENTS,
    BOARDCOMENTS_SUCCES,
    BOARDCOMENTS_FAILURE,    
] = createRequestActionTypes('comments/BOARDCOMMENTS');

export const comments = createAction(
    BOARDCOMENTS,
    ({cm_bd_idx}) => ({cm_bd_idx})
);

const boardCommentsSaga = createRequestSaga(BOARDCOMENTS, menuAPI.boardComments);
export function* commentsSaga(){
    yield takeLatest(BOARDCOMENTS, boardCommentsSaga);
}



const initialState = {
    
    comments:{
        mem_userid: '',
        cm_content: '',
        cm_bd_idx: 0
    }
    
}

const boardComments = handleActions(
    {
        [BOARDCOMENTS_SUCCES] : (state, { payload: boardComments}) => ({
            ...state,
            boardComments,
        }),
        [BOARDCOMENTS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default boardComments;