import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
// 좌석을 선택한 회원의 정보(아이디, 이름, 선택한 좌석번호, 좌석만료 시간을 볼 수 있는 컴포넌트  


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
                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px'}}>
                            아 &nbsp;이&nbsp; 디 : 
                        </div>
                        <div style={{textAlign : "center", display:'inline-block'}}>
                            {userInfo.mem_userid}
                        </div>    
                    </StyledDiv2>
                    <StyledDiv2 className="login_pw">
                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px'}}>
                            이
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            름 :  
                        </div>
                        <div style={{textAlign : "center", display:'inline-block'}}>
                            {userInfo.mem_name}
                        </div> 
                    </StyledDiv2>
                    <StyledDiv2 className="login_pw">
                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px'}}>
                            좌석번호 : 
                        </div>
                        <div style={{textAlign : "center", display:'inline-block'}}>
                            {userInfo.st_seatNumber}
                        </div> 
                    </StyledDiv2>
                    <StyledDiv2 className="login_pw">
                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px'}}>
                            만료시간 : 
                        </div>
                        <div style={{textAlign : "center", display:'inline-block'}}>
                            {userInfo.st_endDate}
                        </div>                            
                    </StyledDiv2>
                </StyledDiv1>
                <br/>
                <Link to="/menu">
                    <StyledButton1>
                        메뉴
                    </StyledButton1>
                </Link>
            </StyledDiv1>
        </div>
    )
}

export default UserInfoForm;