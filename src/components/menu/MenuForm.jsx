import React from 'react';
import StyledButtonMenu from '../styled/StyledButtonMenu';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import { Link } from 'react-router-dom';
import StyledBodyDiv from '../styled/StyledBodyDiv';

// 로그인 후, 할 작업을 선택하는 컴포넌트이다.
// [입장] 버튼을 누르면 사용할 좌석과 시간을 선택하는 화면으로 이동한다. 사용자(계정)의 상태가
// 'mem_status'가 'L'인 경우 [입장]버튼이 보이지 않는다. 
// [좌석확인] 버튼, 현재 좌석들의 상태를 보여준다.
// [퇴실]버튼은 좌석을 사용하지 않는 상태로 바뀌는 동시에, 계정이 로그아웃 된다.

const MenuForm = ({onSubmit, member, zones}) => {

    const mem_status = member?.mem_status;
    const mem_userid = member?.mem_userid;
   
    return (
        <div class="masthead" style={{backgroundImage: 'url(img/lampBack.png)', height: '910px', paddingTop:'calc(1rem + 57px);'}}>
        <StyledBodyDiv >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                    <div className="title" style={{marginBottom:"40px"}}>
                        <StyledH1 style={{color:'#fff'}}>
                            WONY Study Room
                        </StyledH1>
                    </div>        
                    <StyledDiv2>
                        <Link to='/timeChoice'>
                            {mem_status === 'L' ?
                                null :
                            <StyledButtonMenu >
                                입장
                            </StyledButtonMenu>
                        }
                        </Link>
                    </StyledDiv2>
                    <StyledDiv2>
                        <Link to= '/seat'>
                            <StyledButtonMenu  >
                                좌석확인
                            </StyledButtonMenu>
                        </Link>
                    </StyledDiv2>
                    <StyledDiv2>
                        <Link to= {`/userInfo/${mem_userid}`}>
                            {mem_status === 'L' ?
                                <StyledButtonMenu >
                                    사용자 정보
                                </StyledButtonMenu>
                            : null
                            }
                        </Link>
                    </StyledDiv2>
                    <StyledDiv2>
                        <Link to='/boardList/0' >
                            <StyledButtonMenu >
                                게시판
                            </StyledButtonMenu>    
                        </Link>
                    </StyledDiv2>
                <form onSubmit={onSubmit}>
                    <StyledDiv2>
                        <StyledButtonMenu>
                            퇴실<br/><br/>/ 로그아웃
                        </StyledButtonMenu>
                    </StyledDiv2>
                </form> 
                    </div>
                </div>
            </div>       
            
        </StyledBodyDiv>
        </div>
    )

}

export default MenuForm;

