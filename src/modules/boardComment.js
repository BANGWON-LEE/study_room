import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as menuAPI from "../lib/api/menu";

//액션 타입 정의
const CHANGE_FIELD = "boardComment/CHANGE_FIELD";
const INITIALIZE_FORM = "boardComment/INITIALIZE_FORM";

const [BOARDCOMMENT, BOARDCOMMENT_SUCCESS, BOARDCOMMENT_FAILURE] =
    createRequestActionTypes("comment/BOARDCOMMENT");

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

export const comment = createAction(
  BOARDCOMMENT,
  ({ cm_bd_idx, cm_content, cm_mem_idx }) => ({
    cm_bd_idx, 
    cm_content, 
    cm_mem_idx 
  })
);

const boardCommentSaga = createRequestSaga(BOARDCOMMENT, menuAPI.boardComment);

export function* boardCommentsSaga() {
  yield takeLatest(BOARDCOMMENT, boardCommentSaga);
}

const initialState = {
  comment: {
    cm_content : '',
  },
};
// 초기상태값을 빈 문자열로 선언한다.

const boardComment = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        // immer를 사용하여 state는 불변, draft는 변경가능하도록 해줌
        draft[form][key] = value;
      }),
    //첫번째 파라미터에는 수정하고 싶은 상태
    //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      
      ...state, // 불면객체로 관리하기 위해 전개연산자 사용
      [form]: initialState[form],
      authError: null,
    }),
    [BOARDCOMMENT_SUCCESS]: (state, { payload: boardComment }) => ({
      ...state,
      boardCommentError: null,
      boardComment,
    }),
    [BOARDCOMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      boardCommentError: error,
    }),
  },
  initialState
);

export default boardComment;

// handleActions는 switch문으로 리듀서를 구현할 경우 생기는 오류 때문에 대안으로 만들어진 것이다.
