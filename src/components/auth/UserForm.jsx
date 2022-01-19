import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv5 from '../styled/StyledDiv5';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';

//index화면이자 로그인 기능을 하는 컴포넌트이다. 


const LoginForm = ({form, onChange, onSubmit, error}) => {

    return(
        <div class="masthead" style={{backgroundImage: 'url(img/home-bg.jpg)', height: '910px'}}>
            <div className="body">
                <form onSubmit={onSubmit}>        
                    <div class="container position-relative px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">             
                                <div className="title"  style={{marginBottom:"40px"}}>
                                    <StyledH1>
                                        WONY Study Room
                                    </StyledH1>
                                </div>
                                <StyledDiv2 className="login_id">
                                    <p style={{textAlign : 'left', width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529'}}>
                                        아이디 : 
                                    </p>
                                    <StyledText1 value={form.mem_userid} onChange={onChange} name="mem_userid"/>
                                </StyledDiv2>
                                <StyledDiv2 className="login_pw">
                                    <p style={{textAlign : 'left',width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529' }}>
                                        비밀번호 : 
                                    </p>
                                    <StyledPassword type="password" value={form.mem_pass} onChange={onChange} name="mem_pass" />
                                </StyledDiv2>
                                <StyledDiv2>
                                    <p style={{fontSize:'18px'}}>{error}</p>
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
                                </StyledDiv2>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;



