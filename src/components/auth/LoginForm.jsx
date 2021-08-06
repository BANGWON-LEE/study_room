import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';


export default function LoginForm() {
    return(
        <div className="body">        
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        WONY Study Club
                    </StyledH1>
                </div>
                <StyledDiv1 className="register_text">
                    <StyledDiv2 className="register_id">
                        <p style={{textAlign : 'left'}}>아이디 : </p><StyledText1 />
                    </StyledDiv2>
                    <StyledDiv2 className="register_pw">
                        <p style={{textAlign : 'left'}}>비밀번호 : </p><StyledPassword type="password" />
                    </StyledDiv2>
                    <StyledDiv2>
                        <StyledButton1>로그인</StyledButton1>
                    </StyledDiv2>
                    <StyledDiv2>
                        <Link to="/register"><StyledButton1>회원가입</StyledButton1></Link>
                    </StyledDiv2>
                </StyledDiv1>
            </StyledDiv1>
        </div>
    )
}