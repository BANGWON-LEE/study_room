// import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';
// import { takeLatest, call } from 'redux-saga/effects';
// import * as authAPI from '../lib/api/auth'
// import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

// const CHANGE_FIELD = 'check/CHANGE_FIELD';
// const INITIALIZE_FORM = 'check/INITIALIZE_FORM';
// const TEMP_SET_USER = 'check/TEMP_SET_USER';
// const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
//     'check/CHECK'
// )
// const LOGOUT = 'check/LOGOUT';

// export const changeField = createAction(
//     CHANGE_FIELD,
//     ({form, key, value}) => ({
//         form,
//         key,
//         value
//     })
// );

// export const initializeForm = createAction(INITIALIZE_FORM, form => form);
// export const tempSetUser = createAction(TEMP_SET_USER, check => check);
// export const checkOk = createAction(CHECK);
// export const logout = createAction(LOGOUT);

// const checkSaga = createRequestSaga(CHECK, authAPI.check);

// function checkFailureSaga() {
//     try{
//         localStorage.removeItem('check')
//     }catch(e){
//         console.log('localStorage error')
//     }
// }

// // function* logoutSaga(){
// //     try {
// //         yield call(authAPI.logout);
// //         localStorage.removeItem('check');
// //     }catch(e){
// //         console.log(e)
// //     }
// // }

// export function* checksSaga(){
//     yield takeLatest(CHECK, checkSaga);
//     yield takeLatest(CHECK_FAILURE, checkFailureSaga);
//     // yield takeLatest(LOGOUT, logoutSaga);
// };

// const initialState = {
//     check: null,
//     checkError: null,
// };

// export default handleActions(
//     {
//         [CHANGE_FIELD]: (state, { payload: { form, key, value} }) => 
//         produce(state, draft => {
//             draft[form][key] = value;
//         }),
//         [INITIALIZE_FORM]: (state, { payload: form })=>({
//             ...state,
//             [form]: initialState[form],
//             updateError: null,                                     //폼이 바뀌면 인증에러를 초기화
//         }),
//         [TEMP_SET_USER]:(state, { payload: check }) => ({
//             ...state,
//             check
//         }),
//         [CHECK_SUCCESS]:(state, { payload: check }) => ({
//             ...state,
//             check,
//             checkError: null,
//         }),
//         [CHECK_FAILURE]:(state, { payload: error }) => ({
//             ...state,
//             check: null,
//             checkError: error
//         }),
//         // [LOGOUT]: state => ({
//         //     ...state,
//         //     check: null
//         // })
//     }, initialState
// );