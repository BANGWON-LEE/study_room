import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Info } from "../../modules/userInfo";
import UserInfoForm from "../../components/auth/UserInfoForm";

function UserInfoDetail({ match }) {
  const dispatch = useDispatch();
  const { userInfo, userInfoError } = useSelector(({ userInfo }) => ({
    userInfo: userInfo.userInfo,
    userInfoError: userInfo.userInfoError,
  }));

  useEffect(() => {
    const mem_userid = match.params;
    dispatch(Info(mem_userid));
  }, []);
  // 메뉴에서 [사용자 정보] 버튼을 클릭하면 [사용자 정보] 컴포넌트로 이동한다. 그때 첫 렌더링 하면서 mem_userid값으로 액션을 보낸다. mem_userid는 match.params 즉, URL을 통해 넘어오는 값을 받아온다.

  useEffect(() => {
    if (userInfo) {
      console.log("성공Info");
      console.log(userInfo);
    }

    if (userInfoError) {
      if (userInfoError.response.status === 400) {
        return;
      }
      console.log(`infoError!`);
      console.log(userInfoError);

      return;
    }
  }, [userInfo, userInfoError]);

  return <UserInfoForm userInfo={userInfo} />;
}

export default withRouter(UserInfoDetail);
