import React from 'react';
import { Link } from 'react-router-dom';
import StyledBackImg from '../styled/StyledBackImg';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv5 from '../styled/StyledDiv5';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';

//index화면이자 로그인 기능을 하는 컴포넌트이다. 


const LoginForm = ({form, onChange, onSubmit, error}) => {

    return(
        <div className="body">
            <form onSubmit={onSubmit}>        
                <StyledDiv5>
                    <div className="title">
                        <StyledH1>
                            WONY Study Room
                        </StyledH1>
                    </div>
                    <StyledDiv5 className="login_text">
                        <StyledDiv2 className="login_id">
                            <p style={{textAlign : 'left', width:'30%', margin:'0 auto', marginBottom:'20px'}}>
                                아이디 : 
                            </p>
                            <StyledText1 value={form.mem_userid} onChange={onChange} name="mem_userid"/>
                        </StyledDiv2>
                        <StyledDiv2 className="login_pw">
                            <p style={{textAlign : 'left',width:'30%', margin:'0 auto', marginBottom:'20px' }}>
                                비밀번호 : 
                            </p><StyledPassword type="password" value={form.mem_pass} onChange={onChange} name="mem_pass" />
                        </StyledDiv2>
                        <StyledDiv2>
                            <p>{error}</p>
                            <StyledButton1>
                                로그인
                            </StyledButton1>
                        </StyledDiv2>
                        <StyledDiv2>
                            <Link to="/register">
                                <StyledButton1>
                                    회원가입
                                </StyledButton1>
                            </Link>
                            <StyledDiv5>
                                <StyledBackImg src="img/backTable.png"/>
                            </StyledDiv5>
                        </StyledDiv2>
                    </StyledDiv5>
                </StyledDiv5>
            </form>
        </div>
    )
}

export default LoginForm;