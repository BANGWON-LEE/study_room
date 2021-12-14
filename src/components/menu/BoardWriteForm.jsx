import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv5 from '../styled/StyledDiv5';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv4 from '../styled/StyledDiv4';
import StyledH1 from '../styled/StyledH1';
import StyledText2 from '../styled/StyledText2';
import StyledTextarea from '../styled/StyledTextarea';


function BoardWriteForm({form, onChange, onSubmit}) {
    return(
        <div className="body">
            <StyledDiv4>
                <div className="title" style={{marginBottom:"40px", paddingTop:"40px"}}>
                    <StyledH1>
                        글쓰기
                    </StyledH1>
                </div>
            </StyledDiv4>
            <form onSubmit={onSubmit}>
                <StyledDiv2>
                    <div style={{width:'75%', margin:'0 auto', height:'90%'}}>
                        <StyledDiv2>
                            <p style={{width:'70%', textAlign:'left', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529'}}>
                                제목 : 
                            </p>
                            <StyledText2 value={form.bd_title} onChange={onChange} name="bd_title"/>
                        </StyledDiv2>
                        <StyledDiv2>
                        <p style={{width:'70%', textAlign:'left', margin:'0 auto', marginBottom:'20px', fontWeight: 'bold', color:'#212529'}}>
                                내용 : 
                            </p>
                            <StyledTextarea value={form.bd_textarea} onChange={onChange} name="bd_textarea"/>
                        </StyledDiv2>
                        <div style={{textAlign:'center'}}>
                            <StyledButton1 onClick={onSubmit}>
                                글등록
                            </StyledButton1>
                            <div style={{marginBottom:'40px'}}>
                                <Link to='/boardList/0'>
                                    <StyledButton1 style={{marginTop:"20px"}}>
                                        게시판 리스트
                                    </StyledButton1>    
                                </Link>
                            </div>
                        </div>
                    </div>
                </StyledDiv2>
            </form>
        </div>
    )
}

export default BoardWriteForm;