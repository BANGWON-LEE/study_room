import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';
import MenuForm from './pages/MenuPage';
import TimeChoiceForm from './pages/TimeChoicePage';
import SeatPage from './pages/SeatPage';
import UserInfoPage from './pages/UserInfoPage';
import BoardListPage from './pages/BoardListPage';
import BoardWritePage from './pages/BoardWritePage';
import BoardContentPage from './pages/BoardContentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BoardEditPage from './pages/BoardEditPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={LoginPage} path="/" />
        <Route exact component={LoginPage} path="/login" />
        <Route exact component={RegisterPage} path="/register" />
        <Route exact component={MenuForm} path="/menu" />
        <Route exact component={TimeChoiceForm} path="/timeChoice" />
        <Route exact component={SeatPage} path="/seat" />
        <Route exact component={UserInfoPage} path="/userInfo/:mem_userid" />
        <Route exact component={BoardListPage} path="/BoardList/:bd_page"/>
        <Route exact component={BoardWritePage} path="/BoardWrite"/>
        <Route exact component={BoardContentPage} path="/BoardContents/:bd_idx"/>
        <Route exact component={BoardEditPage} path="/BoardEdit/:bd_idx"/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
