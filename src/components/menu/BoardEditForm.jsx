import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv5 from '../styled/StyledDiv5';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv4 from '../styled/StyledDiv4';
import StyledH1 from '../styled/StyledH1';
import StyledText2 from '../styled/StyledText2';
import StyledTextarea from '../styled/StyledTextarea';

function BoardEditForm({form, onChange, onSubmit}) {
    return(
        <div className="body">
            <StyledDiv4>
                <div className="title">
                    <StyledH1>
                        글수정
                    </StyledH1>
                </div>
            </StyledDiv4>
            <StyledDiv5>
                <div style={{width:'75%', margin:'0 auto', height:'90%'}}>
                    <StyledDiv2>
                        <p style={{textAlign : 'left'}}>
                            제목 : 
                        </p>
                        <StyledText2 value={form.bd_title} onChange={onChange} name="bd_title"/>
                    </StyledDiv2>
                    <StyledDiv2>
                        <p style={{textAlign : 'left'}}>
                            내용 : 
                        </p>
                        <StyledTextarea value={form.bd_textarea} onChange={onChange} wrap="hard" name="bd_textarea"/>
                    </StyledDiv2>
                    <StyledButton1 onClick={onSubmit}>
                            글수정
                    </StyledButton1>
                    <div>
                        <Link to='/boardList/0'>
                            <StyledButton1 style={{marginTop:"20px"}}>
                                메뉴
                            </StyledButton1>    
                        </Link>
                    </div>
                </div>
            </StyledDiv5>
        </div>
    )
}

export default BoardEditForm;