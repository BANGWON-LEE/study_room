import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/users";
import UserForm from "../../components/auth/UserForm";

function UserDetail({ history }) {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { form, users, userError } = useSelector(({ users }) => ({
    form: users.login,
    users: users.users,
    userError: users.userError,
  }));

  const onChange = (event) => {
    console.log(event.currentTarget);
    const { value, name } = event.currentTarget;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  function onSubmit(event) {
    event.preventDefault();
    const { mem_userid, mem_pass } = form;
    if ([mem_userid, mem_pass].includes("")) {
      setError("빈 칸을 모두 입력하세요");

      return;
    }

    dispatch(login({ mem_userid, mem_pass }));
    console.log("로그인 확인 : " + mem_userid);
    //login 액션으로 아이디와 비밀번호가 담긴 객체를 전달한다.
  }

  useEffect(() => {
    dispatch(initializeForm("LOGIN"));
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
  }, [userError, error]);

  useEffect(() => {
    if (users) {
      try {
        console.log("users : " + JSON.stringify(users));
        localStorage.setItem("users", JSON.stringify(users));
        //입력된 아이디와 비밀번호가 db에 있는 데이터 정보와 일치하면 localStroage에 로그인 정보가 문자열로 된 JSON으로 저장된다.
        console.log("성공");
        console.log(users);
        history.push("/menu");
        return;
      } catch (e) {
        console.log("localStorage error");
      }
    }
  }, [history, users]);

  return (
    <UserForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}

export default withRouter(UserDetail);
