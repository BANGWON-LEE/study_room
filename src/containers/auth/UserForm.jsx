import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/user";
import LoginForm from '../../components/auth/LoginForm';

//import { check } from "../../modules/user";


function UserForm() {

    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { form, user, userError } = useSelector(({ user }) => ({
      form: user.login,
      user: user.user,
      userError: user.userError,

    }));

  
    
    console.log(form.mem_userid);
    
    const onChange = (event) => {
      const { value, name } = event.currentTarget;
      dispatch(
        changeField({
          form: "login",
          key: name,
          value,
        }),
        );
      };

      


    function onSubmit(event){
      event.preventDefault();
      const { mem_userid, mem_pass } = form;
      if ([mem_userid, mem_pass].includes("")) {
        setError("빈 칸을 모두 입력하세요");
      
        return;
      }
   

      dispatch(login({mem_userid, mem_pass}));
    };







    useEffect(() => {
        dispatch(initializeForm("login"));
      }, [dispatch]);
    
      useEffect(() => {
        if (userError) {
            if (userError.response.status === 409) {
            setError("이미 존재하는 계정명입니다.");
            
             return;
           }
          console.log(`error!`);
          console.log(userError);
          setError("존재하지 않는 계정입니다.");
          return;
        }
        if (user) {
          console.log("성공");
          console.log(user);
          //dispatch(check());
          return;
        }
      }, [user, userError, dispatch, error]);

      
return (
    <LoginForm
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    error={error}
    />
    )
};

export default withRouter(UserForm);