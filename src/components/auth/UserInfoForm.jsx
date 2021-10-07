import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
 


const UserInfoForm = ({userInfo}) => {


    return(
        <div className="body">       
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        WONY Study Club
                    </StyledH1>
                </div>
                <StyledDiv1 className="login_text">
                    <StyledDiv2 className="login_id">
                        <p style={{textAlign : 'left'}}>
                            아이디 : 
                        </p>
                        {userInfo.mem_userid}
                    </StyledDiv2>
                    <StyledDiv2 className="login_pw">
                        <p style={{textAlign : 'left'}}>
                            이름 : 
                        </p>
                         {userInfo.mem_name}   
                    </StyledDiv2>
                    <StyledDiv2 className="login_pw">
                        <p style={{textAlign : 'left'}}>
                            좌석번호 : 
                        </p>
                        {userInfo.st_seatNumber}
                    </StyledDiv2>
                    <StyledDiv2 className="login_pw">
                        <p style={{textAlign : 'left'}}>
                            만료시간 : 
                        </p>
                        {userInfo.st_endDate}                            
                    </StyledDiv2>
                </StyledDiv1>
            <Link to="/menu"><StyledButton1>메뉴</StyledButton1></Link>
            </StyledDiv1>
        </div>
    )
}

export default UserInfoForm;