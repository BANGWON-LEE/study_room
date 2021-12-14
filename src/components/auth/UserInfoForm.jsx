import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv3 from '../styled/StyledDiv3';
import StyledH1 from '../styled/StyledH1';
// 좌석을 선택한 회원의 정보(아이디, 이름, 선택한 좌석번호, 좌석만료 시간을 볼 수 있는 컴포넌트  


const UserInfoForm = ({userInfo}) => {


    return(
        <div class="masthead" style={{height: '980px', paddingTop:'calc(1rem + 57px);'}}>
            <div className="body">  
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <StyledDiv2 style={{marginBottom:'355px'}} >
                                <div className="title" style={{marginBottom:"40px", paddingTop:"40px"}}>
                                    <StyledH1 style={{color:'#fff'}}>
                                        WONY Study Club
                                    </StyledH1>
                                </div>
                                <StyledDiv3 className="login_text">
                                    <StyledDiv2 className="login_id" >
                                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px', fontWeight:'bolder'}}>
                                            아 &nbsp;이&nbsp; 디 : 
                                        </div>
                                        <div style={{textAlign : "center", display:'inline-block', fontWeight:'bolder' }}>
                                            {userInfo.mem_userid}
                                        </div>    
                                    </StyledDiv2>
                                    <StyledDiv2 className="login_pw">
                                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px', fontWeight:'bolder'}}>
                                            이
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            름 :  
                                        </div>
                                        <div style={{textAlign : "center", display:'inline-block', fontWeight:'bolder'}}>
                                            {userInfo.mem_name}
                                        </div> 
                                    </StyledDiv2>
                                    <StyledDiv2 className="login_pw">
                                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px' , fontWeight:'bolder'}}>
                                            좌석번호 : 
                                        </div>
                                        <div style={{textAlign : "center", display:'inline-block', fontWeight:'bolder'}}>
                                            {userInfo.st_seatNumber}
                                        </div> 
                                    </StyledDiv2>
                                    <StyledDiv2 className="login_pw">
                                        <div style={{float : 'left', display:'inline-block', paddingLeft:'40px' , fontWeight:'bolder'}}>
                                            만료시간 : 
                                        </div>
                                        <div style={{textAlign : "center", display:'inline-block', fontWeight:'bolder'}}>
                                            {userInfo.st_endDate}
                                        </div>                            
                                    </StyledDiv2>
                                </StyledDiv3>
                                <br/>
                                <Link to="/menu">
                                    <StyledButton1 style={{backgroundColor:'#0085A1', border:'none'}}>
                                        메뉴
                                    </StyledButton1>
                                </Link>
                            </StyledDiv2>
                        </div>
                    </div>                
                </div>
            </div>
        </div>    
    )
}

export default UserInfoForm;


