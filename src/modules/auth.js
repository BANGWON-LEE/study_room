import { createAction, handleActions } from "redux-actions";
//immer = state의 불변성 관리 해주는 모듈
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER",
);

// const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
//   "auth/LOGIN",
// );

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(REGISTER, ({ mem_userid, mem_pass,  mem_name, mem_hp }) => ({
  mem_userid, 
  mem_pass,  
  mem_name, 
  mem_hp
}));
// export const login = createAction(LOGIN, ({ username, password }) => ({
//   username,
//   password,
// })
//);

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
//const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
 // yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    mem_userid:"", 
    mem_pass:"", 
    mem_name:"", 
    mem_hp:""
  },
  // login: {
  //   mem_userid:"", 
  //   mem_pass:"", 
  // },
};

const auth = handleActions(
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
    // [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
    //   ...state,
    //   authError: null,
    //   auth,
    // }),
    // [LOGIN_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   authError: error,
    // }),
  },
  initialState,
);

export default auth;
