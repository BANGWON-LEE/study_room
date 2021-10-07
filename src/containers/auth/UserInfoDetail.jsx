import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {Info} from '../../modules/userInfo'
import UserInfoForm from '../../components/auth/UserInfoForm';




function UserInfoDetail({match}) {
    const dispatch = useDispatch();
 
    const {  userInfo, userInfoError } = useSelector(({ userInfo }) => ({
        userInfo : userInfo.userInfo,
        userInfoError : userInfo.userInfoError
      }));
      console.log("info123")
      console.log(userInfo);

      useEffect(() => {
    const mem_userid = match.params;
       dispatch(Info(mem_userid)) ;
    }, [dispatch]);
    

    useEffect(() => {

        if(userInfo) {
            console.log("성공Info");
            console.log(userInfo)
        }

        if (userInfoError) {
            if (userInfoError.response.status === 400) {
              return;
            }
            console.log(`infoError!`);
            console.log(userInfoError);
          
            return;
          }

    },[userInfo, userInfoError])


return (
    <UserInfoForm
    userInfo={userInfo}
    />
    )
};

export default withRouter(UserInfoDetail);