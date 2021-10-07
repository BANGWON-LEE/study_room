import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

//액션 타입 정의
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER",
);


export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

// CHANGE_FIELD는 액션 타입
// ({ form, key, value }) => ({form, key, value,}) 어떤 파라미터를 받는지 명시하기 위해 작성해놓음 작성하지 않아도 된다.

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(REGISTER, ({ mem_userid, mem_pass,  mem_name, mem_hp }) => ({
  mem_userid, 
  mem_pass,  
  mem_name, 
  mem_hp
}));


const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
  register: {
    mem_userid:"", 
    mem_pass:"", 
    mem_name:"", 
    mem_hp:""
  },
};
// 초기상태값을 빈 문자열로 선언한다.

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => { // immer를 사용하여 state는 불변, draft는 변경가능하도록 해줌
        draft[form][key] = value;
      }),
    //첫번째 파라미터에는 수정하고 싶은 상태
    //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      //위 코드는 action 객체를 비구조화 할당하고, payload 값을 auth 라고 부르겠다는 의미입니다.
      ...state, // 불면객체로 관리하기 위해 전개연산자 사용
      [form]: initialState[form],
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;

// handleActions는 switch문으로 리듀서를 구현할 경우 생기는 오류 때문에 대안으로 만들어진 것이다. 