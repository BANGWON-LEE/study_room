import axios from 'axios';
import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';

const LoginForm = ({form, onChange, onSubmit, error}) => {



//     const [mem_userid, setMem_userid] = useState('')
//     const [mem_pass, setMem_userpass] = useState('')


// function u_login() {

//     console.log("아이디 : " + mem_userid);

//     const res =  axios.get('api/login', { params:{
//         userId : mem_userid,
//         userPw : mem_pass,
        
//     }
    
//     },
    
//     ).then(function(response){
//         console.log(response);
//     }).catch(function(error) {
//         console.log(error);
//     });

        
// }
    
  


    return(
        <div className="body">
            <form onSubmit={onSubmit}>        
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
                            <StyledText1 value={form.mem_userid} onChange={onChange} name="mem_userid"/>
                        </StyledDiv2>
                        <StyledDiv2 className="login_pw">
                            <p style={{textAlign : 'left'}}>
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
                        </StyledDiv2>
                    </StyledDiv1>
                <Link to="/register"><StyledButton1>회원가입</StyledButton1></Link>
                </StyledDiv1>
            </form>
        </div>
    )
}

export default LoginForm;