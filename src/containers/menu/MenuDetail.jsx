import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import MenuForm from "../../components/menu/MenuForm";
import { logouts } from "../../modules/logout";

function MenuDetailForm() {
  const dispatch = useDispatch();
  const { logout, users, logoutError } = useSelector(({ logout, users }) => ({
    users: users.users,
    logout: logout.logout,
    logoutError: logout.logoutError,
  }));
  
    const getUser = localStorage.getItem("users");
    const member = JSON.parse(getUser);
    // 이전에는 users값을 Reducer로 변화된 값을 받아왔지만, 리로드 되면 users가 undefined된다. 그래서, localStorage에 있는 값을 받아왔다.

  function onSubmit(event) {
    event.preventDefault();
    const mem_userid = member.mem_userid;

    localStorage.removeItem("users", JSON.stringify(users));
    // 메뉴 컴포넌트(components/MenuForm.jsx)에서 로그아웃 버튼을 클릭하면 localStorage에 등록되있는 계정정보가 삭제된다.
    dispatch(logouts({ mem_userid }));
  }

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
    <MenuForm onSubmit={onSubmit} member={member}/>
  );
}

export default withRouter(MenuDetailForm);
