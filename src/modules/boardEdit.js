import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as menuAPI from "../lib/api/menu";

//액션 타입 정의
const CHANGE_FIELD = "boardEdit/CHANGE_FIELD";
const INITIALIZE_FORM = "boardEdit/INITIALIZE_FORM";

const [BOARDEDIT, BOARDEDIT_SUCCESS, BOARDEDIT_FAILURE] =
    createRequestActionTypes("edit/BOARD");

    export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    })
);

// CHANGE_FIELD는 액션 타입
// ({ form, key, value }) => ({form, key, value,}) 어떤 파라미터를 받는지 명시하기 위해 작성해놓음 작성하지 않아도 된다.

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const edit = createAction(
    BOARDEDIT,
    ({ bd_title, bd_textarea, mem_idx, bd_idx }) => ({
        bd_title, 
        bd_textarea,
        mem_idx,
        bd_idx,
    })
);

const boardEditSaga = createRequestSaga(BOARDEDIT, menuAPI.boardEdit);

export function* boardEditsSaga() {
    yield takeLatest(BOARDEDIT, boardEditSaga);
}

const initialState = {
    edit: {
        bd_title : '', 
        bd_textarea : '',
    },
};
// 초기상태값을 빈 문자열로 선언한다.

const boardEdit = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, (draft) => {
            // immer를 사용하여 state는 불변, draft는 변경가능하도록 해줌
            draft[form][key] = value;
        }),
        //첫번째 파라미터에는 수정하고 싶은 상태
        //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
        //위 코드는 action 객체를 비구조화 할당하고, payload 값을 auth 라고 부르겠다는 의미입니다.
        ...state, // 불면객체로 관리하기 위해 전개연산자 사용
        [form]: initialState[form],
        boardEditError: null,
        }),
        [BOARDEDIT_SUCCESS]: (state, { payload: edit }) => ({
        ...state,
        boardEditError: null,
        edit,
        }),
        [BOARDEDIT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        boardEditError: error,
        }),
    },
    initialState
);

export default boardEdit;

// handleActions는 switch문으로 리듀서를 구현할 경우 생기는 오류 때문에 대안으로 만들어진 것이다.
