import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from '../../components/auth/AuthForm';

//import { check } from "../../modules/user";


function RegisterForm({history}) {

    const [error, setError] = useState('데이터를 입력하세요');
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,

    }));

  
    
    console.log(form.mem_userid);
    
    const onChange = (event) => {
      const { value, name } = event.currentTarget;
      dispatch(
        changeField({
          form: "register",
          key: name,
          value,
        }),
        );
      };

      


    function onSubmit(event){
      event.preventDefault();
      const { mem_userid, mem_pass, mem_passChk, mem_name, mem_hp } = form;
      if ([mem_userid, mem_pass, mem_passChk, mem_name, mem_hp].includes("")) {
        setError("빈 칸을 모두 입력하세요");
        history.go(0);
        return;
      }
      if (mem_pass !== mem_passChk) {
        setError("비밀번호가 일치하지 않습니다.");
        history.go(0);
        dispatch(changeField({ form: "register", key: "mem_pass", value: "" }));
        dispatch(
          changeField({ form: "register", key: "mem_passChk", value: "" }),
        );
        return;
      }
      dispatch(register({mem_userid, mem_pass, mem_name, mem_hp }));
    };







    useEffect(() => {
        dispatch(initializeForm("register"));
      }, [dispatch]);
    
      useEffect(() => {
        if (authError) {
           if (authError.response.status === 409) {

             setError("이미 존재하는 계정명입니다.");
            
             return;
           }
          console.log(`error!`);
          console.log(authError);

          return;
        }
        if (auth) {
          console.log("성공");
          console.log(auth);
        
          return;
          
        }

      }, [auth, authError, dispatch, error]);

      
return (
    <AuthForm
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    error={error}
    />
    )
};

export default withRouter(RegisterForm);