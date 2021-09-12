import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
//import {initializeForm } from "../../modules/users";
import MenuForm from '../../components/menu/MenuForm';
import { logouts } from '../../modules/logout';



function MenuDetailForm() {
  const dispatch = useDispatch();
  const {  logout, users, logoutError } = useSelector(({ logout, users }) => ({
    users: users.users,
    logout: logout.logout,
    logoutError:logout.logoutError,
  
  }));

  

  

    
    function onSubmit(event){
      const mem_userid = users.tf?.mem_userid
      console.log("!!:"+ mem_userid);

      localStorage.removeItem('users', JSON.stringify(users));
      dispatch(logouts({mem_userid}));
      event.preventDefault();     
    };

    
  
    useEffect(() => {

      if (logout === false) {
        console.log("성공");
        console.log(logout);
       
        
        
        return;
      }
    }, [logout]);

    useEffect(() => {
      if (logoutError) {
         if (logoutError.response.status === 400) {
          window.location.replace("/login");
           return;
         }
        console.log(`error!`);
        console.log(logoutError);

        return;
      }
      if (logout) {
        console.log("성공");
        console.log(logout);
      
        return;
        
      }

    }, [logout, logoutError]);




return (
    <MenuForm
      onSubmit={onSubmit}
      users={users}
    />
    )
};

export default withRouter(MenuDetailForm);