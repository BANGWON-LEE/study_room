import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  console.log(request);
  console.log(type);
  const SUCCESS = `${type}_SUCCESS`; 
  // 인자로 넘어온 정의된 액션 타입과 함께 선언
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
    console.log(action);
    console.log(type);
    try {
      const response = yield call(request, action.payload);
    
      console.log( response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        // meta: response
      });
    } catch (e) {
      console.log('createRequestSaga진입실패')
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}

//createRequestSaga의 인자 중 type은 액션 타입이 정의된 것이 넘어올 것이고 request는 서버를 통해 db에서 넘어오는 데이터를 말한다.

//redux-saga의 call은 await과 같다. 첫번째 인자가 제대로 실행 되고 그 다음에 두번 째 인자가 실행된다. 

//redux-saga의 put은 액션 타입을 수행시키는 dispatch와 흡사하다.

