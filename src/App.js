import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginForm from './pages/LoginPage';
import RegisterForm from './pages/RegisterPage';
import MenuForm from './pages/MenuPage';
import TimeChoiceForm from './components/menu/TimeChoiceForm';
import ZoneForm from './components/menu/ZoneForm';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={LoginForm} path="/" />
        <Route exact component={RegisterForm} path="/register" />
        <Route exact component={MenuForm} path="/menu" />
        <Route exact component={TimeChoiceForm} path="/timeChoice/:id" />
        <Route exact component={ZoneForm} path="/zone/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
