import React, { useEffect } from 'react';
import {  useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
//import {initializeForm } from "../../modules/users";
import MenuForm from '../../components/menu/MenuForm';

function MenuDetailForm({history}) {

  const { users } = useSelector(({ users }) => ({
    users: users.users,
  }));

    
    function onSubmit(event){
      event.preventDefault();
      localStorage.removeItem('users', JSON.stringify(users));
      history.push('/')
      
    };







return (
    <MenuForm
      onSubmit={onSubmit}
    />
    )
};

export default withRouter(MenuDetailForm);