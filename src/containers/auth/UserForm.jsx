import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/users";
import LoginForm from '../../components/auth/LoginForm';
// import { checkOk } from "../../modules/check";


function UserForm({history}) {

    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { form, users, userError } = useSelector(({ users }) => ({
      form: users.login,
      users: users.users,
      userError: users.userError,

    }));
    
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
            if (userError.response.status === 401) {
            setError("아이디 또는 비밀번호를 확인해주세요");
            
            return;
          }
          console.log(`error!`);
          console.log(userError);
          setError("아이디 또는 비밀번호를 확인해주세요");
          return;
        }
        if (users) {
          console.log("성공");
          console.log(users);
          // dispatch(checkOk());
          alert(`공부합시다. ${form.mem_userid}님!`);
          history.push('/menu');
          return;
        }
      }, [users, userError, dispatch, error]);

      useEffect(() => {
        if(users){  
            try{
                console.log("users : " + JSON.stringify(users));
                localStorage.setItem('users', JSON.stringify(users));
                
                
            }catch(e){
                console.log('localStorage error');
            }
        }
    }, [history, users]);





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