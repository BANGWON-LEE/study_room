import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledBodyDiv from '../styled/StyledBodyDiv';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv5 from '../styled/StyledDiv5';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';
import FooterDiv from '../FooterDiv'

// 회원가입 기능하는 컴포넌트이다.
// 정보를 다 입력 한 후 [가입정보체크] 버튼을 누르면 두 가지 행동이 취해진다.
// 1. container(auth/RegisterFrom.jsx)로 입력한 값을 넘기고 db와 연결되어 정보가 insert 된다.
// 만약 똑같은 정보의 입력한 값(같은 정보의 계정)이 있다면 "이미 존재하는 계정명입니다. "라는  
// 메시지가 나오고 [로그인 화면으로]라는 Link가 나온다.
// 2. 같은 정보의 입력한 값(같은 정보의 계정)이 없다면 위에서 말했 듯 db에 insert 되고, 
// 화면에 '가입성공'이라는 메시지와 함께 [로그인 화면으로]라는 Link가 나온다.
// - Link가 나오는 경우는 [가입정보체크] 버튼을 누르면 number라는 상태값이 1증가한다. 
// 삼항연산자로 number의 값이 1 이상일 경우에만 Link가 나오도록 설정해놓았다. 



function AuthForm({ form, onChange, onSubmit, error}) {


    const [number, setNumber] = useState(0);
    const go = () => {
        setNumber(number+1);
    }

    return(
        <div class="masthead" style={{backgroundImage: 'url(img/home-bg.jpg)'}}>
        <StyledBodyDiv>
            <form onSubmit={onSubmit} >       
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                        <StyledDiv2 style={{marginBottom:"40px"}}>
                    <div className="title">
                        <StyledH1>
                            회원가입
                        </StyledH1>
                    </div>
                    <StyledDiv2 className="register_text">
                        <StyledDiv2 className="register_id">
                            <p style={{textAlign : 'left', width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529'}}>
                                아이디 : 
                            </p>
                            <StyledText1 value={form.mem_userid} onChange={onChange} name="mem_userid"/>
                        </StyledDiv2>
                        <StyledDiv2 className="register_pw">
                            <p style={{textAlign : 'left',width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529' }}>
                                비밀번호 : 
                            </p>
                            <StyledPassword  value={form.mem_pass} type={'password'}  onChange={onChange} name="mem_pass"/>
                        </StyledDiv2>
                        <StyledDiv2 className="register_pw_check">
                            <p style={{textAlign : 'left',width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529' }}>
                                비밀번호 확인: 
                            </p>
                            <StyledPassword  type={'password'} onChange={onChange} name="mem_passChk"/>
                        </StyledDiv2>
                        <StyledDiv2 className="register_name">
                            <p style={{textAlign : 'left',width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529' }}>
                                이름 : 
                            </p>
                            <StyledText1 value={form.mem_name} onChange={onChange} name="mem_name" />
                        </StyledDiv2>
                        <StyledDiv2 className="register_hp">
                            <p style={{textAlign : 'left',width:'50%', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529' }}>
                                연락처 : 
                            </p>
                            <StyledText1  value={form.mem_hp} onChange={onChange} name="mem_hp" placeholder="-(하이픈)은 입력하지 마세요"/>
                        </StyledDiv2>
                        <StyledDiv2>
                            <p>{error}</p> 
                            {error !== null ? 
                                <StyledButton1 onClick={go}>
                                    가입정보 체크
                                </StyledButton1> : null}
                            <p value={number}>
                                {number >= 1 ? 
                                    <Link to="/" style={{listStyle:'none'}}>
                                        <StyledButton1 style={{width: '190px'}}>
                                            로그인 화면으로
                                        </StyledButton1>    
                                    </Link> : null}
                            </p>
                        </StyledDiv2>
                    </StyledDiv2>
                </StyledDiv2>
                        </div>
                    </div>
                </div>                
            </form>
        </StyledBodyDiv>
        </div>
    )
    

}

export default AuthForm;

