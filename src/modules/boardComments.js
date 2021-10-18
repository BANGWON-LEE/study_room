import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as menuAPI from '../lib/api/menu';
import { takeLatest } from 'redux-saga/effects';


const [
    BOARD_COMENTS,
    BOARD_COMENTS_SUCCES,
    BOARD_COMENTS_FAILURE,    
] = createRequestActionTypes('comments/BOARD_COMMENTS');

export const comments = createAction(
    BOARD_COMENTS,
    ({bd_idx}) => ({bd_idx})
);

const boardCommentsSaga = createRequestSaga(BOARD_COMENTS, menuAPI.boardComments);
export function* commentsSaga(){
    yield takeLatest(BOARD_COMENTS, boardCommentsSaga);
}

const initialState = {
    
  
        mem_userid: '',
        cm_content: '',
        bd_idx: 0

    
}

const boardComments = handleActions(
    {
        [BOARD_COMENTS_SUCCES] : (state, { payload: boardComments}) => ({
            ...state,
            boardComments,
        }),
        [BOARD_COMENTS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default boardComments;