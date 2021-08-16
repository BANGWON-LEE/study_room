import { createAction, handleActions } from "redux-actions";
//immer = state의 불변성 관리 해주는 모듈
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "user/CHANGE_FIELD";
const INITIALIZE_FORM = "user/INITIALIZE_FORM";

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    "user/LOGIN",
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
    form,
    key,
    value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const login = createAction(LOGIN, ({ mem_userid, mem_pass }) => ({
    mem_userid,
    mem_pass,
})
);

const userSaga = createRequestSaga(LOGIN, authAPI.login);
export function*  usersSaga() {
  yield takeLatest(LOGIN, userSaga);
 // yield takeLatest(LOGIN, loginSaga);
}

const initialState = {

    login: {
        mem_userid:"", 
        mem_pass:"", 
        },
};

const user = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    //첫번째 파라미터에는 수정하고 싶은 상태
    //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      userError: null,
    }),
    
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
        ...state,
        userError: null,
        user,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
        ...state,
        userError: error,
    }),
},
initialState,
);

export default user;
