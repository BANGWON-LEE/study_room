import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import App from './App';


const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  
  sagaMiddleware.run(rootSaga);

  //rootSaga는 여러 개의 saga를 만들고 하나로 뭉쳐 놓은 것이다.

  ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    );


    //React DOM이란 가상돔에서 HTML을 생성하는데 필요한 라이브러리이다.
    
    //document.getElementById('root')인 경우는  모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 "root" DOM 노드라고 부른다.

    // 리덕스에는 createStore함수가 있다. store가 하는 일이 기본적으로 data를 넣을 수 있는 장소를 생성한다. Store는 state를 넣는 곳이고, state는 어플리케이션에서 바뀌는 데이터를 의미한다. createStore를 할 때 매개변수에는 reducer가 꼭 필요하다. reducer는 함수이고 data(state)를 수정한다. 따라서 reducer가 "hello"를 return한다면 "hello"가 어플리케이션에 있는 data가 될 것이다.

    //BrowserRouter 컴포넌트는 Router 컴포넌트를 렌더링할 때 props로 history 객체를 전달한다.