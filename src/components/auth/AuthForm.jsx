import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';









function AuthForm({ form, onChange, onSubmit, error}) {


    const [number, setNumber] = useState(0);
    const go = () => {
        setNumber(number+1);
    }
   

  

    return(
        <div className="body">
            <form onSubmit={onSubmit} >       
                <StyledDiv1>
                    <div className="title">
                        <StyledH1>
                            회원가입
                        </StyledH1>
                    </div>
                    <StyledDiv1 className="register_text">
                        <StyledDiv2 className="register_id">
                            <p style={{textAlign : 'left'}}>
                                아이디 : 
                            </p>
                            <StyledText1 value={form.mem_userid} onChange={onChange} name="mem_userid"/>
                        </StyledDiv2>
                        <StyledDiv2 className="register_pw">
                            <p style={{textAlign : 'left'}}>
                                비밀번호 : 
                            </p>
                            <StyledPassword  value={form.mem_pass} type={'password'}  onChange={onChange} name="mem_pass"/>
                        </StyledDiv2>
                        <StyledDiv2 className="register_pw_check">
                            <p style={{textAlign : 'left'}}>
                                비밀번호 확인: 
                            </p>
                            <StyledPassword  type={'password'} onChange={onChange} name="mem_passChk"/>
                        </StyledDiv2>
                        <StyledDiv2 className="register_name">
                            <p style={{textAlign : 'left'}}>
                                이름 : 
                            </p>
                            <StyledText1 value={form.mem_name} onChange={onChange} name="mem_name" />
                        </StyledDiv2>
                        <StyledDiv2 className="register_hp">
                            <p style={{textAlign : 'left'}}>
                                연락처 : 
                            </p>
                            <StyledText1  value={form.mem_hp} onChange={onChange} name="mem_hp" />
                        </StyledDiv2>
                        <StyledDiv2>
                            <p>{error}</p>
                            {error !== null ? <StyledButton1 onClick={go}>가입정보 체크</StyledButton1> : null}
                            <p value={number}>
                            {number >= 1 ? <Link to="/">가입 성공</Link> : null}
                            </p>
                        </StyledDiv2>
                    </StyledDiv1>
                </StyledDiv1>
            </form>     
        </div>
    )
    

}

export default AuthForm;

