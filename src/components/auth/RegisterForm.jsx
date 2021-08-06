import Password from 'antd/lib/input/Password';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledPassword from '../styled/StyledPassword';
import StyledText1 from '../styled/StyledText1';









export default function RegisterForm({history}) {


    const [u_id, setU_id] = useState('');
    const [u_pw, setU_pw] = useState('');
    const [u_pw_ck, sewU_pw_ck] = useState('');
    const [u_name, setU_name] = useState('');
    const [u_hp, setU_hp] = useState('');

    const onU_id = (e) => {
        setU_id(e.currentTarget.value)
    }

    const onU_pw = (e) => {
        setU_pw(e.currentTarget.value)
    }
    
    const onU_pw_Ck =(e) => {
        sewU_pw_ck(e.currentTarget.value)
    }

    const onU_name = (e) => {
        setU_name(e.currentTarget.value)
    }

    const onU_hp = (e) => {
        setU_hp(e.currentTarget.value)
    }


    useEffect(() => {
        console.log(history);
        const unblock = history.block('회원가입이 완료되었습니다.');
        return () => {
            unblock();
        };
        }, [history]);

    
    const pwRef = useRef(null);
    
    function u_register() {
            console.log(u_id)

        if(u_pw !== u_pw_ck) {
            alert('비밀번호가 일치하지 않습니다.');
            return pwRef.current.focus();
        } 



        axios.post('api/register', {
            userId : u_id,
            userPw : u_pw,
            userName : u_name,
            userHp : u_hp,
        }
    ).then(function(response){
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });

    history.push('/');
    
}

    





    return(
        <div className="body">        
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
                        <StyledText1 value={u_id}  onChange={onU_id} name="id"/>
                    </StyledDiv2>
                    <StyledDiv2 className="register_pw">
                        <p style={{textAlign : 'left'}}>
                            비밀번호 : 
                        </p>
                        <StyledPassword type={'password'} value={u_pw} ref={pwRef} onChange={onU_pw} name="pw"/>
                    </StyledDiv2>
                    <StyledDiv2 className="register_pw_check">
                        <p style={{textAlign : 'left'}}>
                            비밀번호 확인: 
                        </p>
                        <StyledPassword type={'password'} value={u_pw_ck} onChange={onU_pw_Ck} name="pw_check"/>
                    </StyledDiv2>
                    <StyledDiv2 className="register_name">
                        <p style={{textAlign : 'left'}}>
                            이름 : 
                        </p>
                        <StyledText1 value={u_name} onChange={onU_name} name="name" />
                    </StyledDiv2>
                    <StyledDiv2 className="register_hp">
                        <p style={{textAlign : 'left'}}>
                            연락처 : 
                        </p>
                        <StyledText1 value={u_hp} onChange={onU_hp} name="hp" />
                    </StyledDiv2>
                    <StyledDiv2>
                        <StyledButton1 onClick={u_register}>가입</StyledButton1>
                    </StyledDiv2>
                </StyledDiv1>
            </StyledDiv1>
        </div>
    )

}

