import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import createSagaMiddleware from 'redux-saga';
//import rootReducer, { rootSaga } from './modules';




import App from './App';

//   const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// sagaMiddleware.run(rootSaga);

  ReactDOM.render(
    // <Provider store={store}>
    // <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
    // </BrowserRouter>
    // </Provider>,
    document.getElementById('root')
  );


