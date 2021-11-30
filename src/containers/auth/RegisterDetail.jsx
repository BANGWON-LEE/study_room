import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, register } from "../../modules/auth";
import RegisterForm from '../../components/auth/RegisterForm';

function RegisterDetail({history}) {

    const [error, setError] = useState('정보를 입력하세요');
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,

    }));

    const onChange = (event) => {
      const { value, name } = event.currentTarget; // currentTarget는 선택 된 태그의 부모 태그까지 불러온다.
      dispatch(
        changeField({
          form: "register",
          key: name,
          value,
        }),
        );
      };

      


    function onSubmit(event){
       event.preventDefault(); // form태그 안에 button 태그를 클릭하면 새로고침되지만 해당 코드를 입력하면 새로고침 되지 않는다. 
      
      const { mem_userid, mem_pass, mem_passChk, mem_name, mem_hp } = form;
      const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
      //전화번호 입력 정규식

      if ([mem_userid, mem_pass, mem_passChk, mem_name, mem_hp].includes("")) {
        setError("빈 칸을 모두 입력하세요");
        alert("빈 칸을 모두 입력하세요")
        history.go(0); 
        return;
      }
      if (mem_pass !== mem_passChk) {
        setError("비밀번호가 일치하지 않습니다.");
        alert("비밀번호가 일치하지 않습니다.")
        history.go(0);
        return;
      }

      if(regPhone.test(mem_hp) !== true ) {
        setError("전화번호를 다시 입력하세요");
        alert("전화번호를 다시 입력하세요");
        return;
      }
      //정규식에 전화번호로 입력 된 값을 넣어 test()메소드로 입력한 값의 유효성 검사를 한다.

      dispatch(register({mem_userid, mem_pass, mem_name, mem_hp }));
    };

    useEffect(() => {
        //console.log('이니시얼');
        dispatch(initializeForm("register"));
      }, [dispatch]);
      

    
      useEffect(() => {
        if (authError) {
          if (authError.response.status === 409) {

            setError("이미 존재하는 계정명입니다.");
            
            return;
          }
          //console.log('error!');
          //console.log(authError);

          return;
        }
        if (auth) {
          //console.log("성공");
          //console.log(auth);
          setError("가입성공"); //setError라는 문자열 상태값을 통해 가입성공이라는 메시지를 보여준다.
          
        
          return;
          
        }

      }, [auth, authError, dispatch ,error]);

      
return (
    <RegisterForm
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    error={error}
    />
    )
};

export default withRouter(RegisterDetail);
