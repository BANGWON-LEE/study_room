import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginForm from './pages/LoginPage';
import RegisterForm from './pages/RegisterPage';
import MenuForm from './pages/MenuPage';
import TimeChoiceForm from './pages/TimeChoicePage';
import SeatPage from './pages/SeatPage';
import UserInfoPage from './pages/UserInfoPage';
import BoardListPage from './pages/BoardListPage';
import BoardWritePage from './pages/BoardWritePage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={LoginForm} path="/" />
        <Route exact component={LoginForm} path="/login" />
        <Route exact component={RegisterForm} path="/register" />
        <Route exact component={MenuForm} path="/menu" />
        <Route exact component={TimeChoiceForm} path="/timeChoice" />
        <Route exact component={SeatPage} path="/seat" />
        <Route exact component={UserInfoPage} path="/userInfo/:mem_userid" />
        <Route exact component={BoardListPage} path="/BoardList"/>
        <Route exact component={BoardWritePage} path="/BoardWrite"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
