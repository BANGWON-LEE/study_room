import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as menuAPI from "../lib/api/menu";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";

const [CONTENTS, CONTENTS_SUCCESS, CONTENTS_FAILURE] =
    createRequestActionTypes("contents/BOARDCONTENTS");

export const contents = createAction(CONTENTS, ({ bd_idx }) => ({ bd_idx }));

const boardContentsSaga = createRequestSaga(CONTENTS, menuAPI.boardContents);

export function* boardContentSaga() {
    yield takeLatest(CONTENTS, boardContentsSaga);
}

const initialState = {
    boardContents: {
        bd_idx: 0,
        bd_title: '', 
        bd_cotents: '', 
        mem_userid: '',  
        bd_regDate: '', 
        bd_recommand: 0
    },
};

const boardContents = handleActions(
    {
        [CONTENTS_SUCCESS]: (state, { payload: boardContents }) => ({
        ...state,
        boardContentsError: null,
        boardContents,
        }),
        [CONTENTS_FAILURE]: (state, { payload: error }) => ({
        ...state,
        boardContentsError: error,
        }),
    },
    initialState
);

export default boardContents;
