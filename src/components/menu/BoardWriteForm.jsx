import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledText1 from '../styled/StyledText1';
import StyledTextarea from '../styled/StyledTextarea';

function BoardWriteForm() {
    return(
        <div className="body">
            <form>
                <StyledDiv1>
                    <div className="title">
                        <StyledH1>
                            글쓰기
                        </StyledH1>
                    </div>
                </StyledDiv1>
                <StyledDiv1>
                    <StyledDiv2>
                        <p style={{textAlign : 'left'}}>
                            제목 : 
                        </p>
                        <StyledText1 name="bd_title"/>
                    </StyledDiv2>
                    <StyledDiv2>
                        <p style={{textAlign : 'left'}}>
                            내용 : 
                        </p>
                        <StyledTextarea name="bd_textarea"/>
                    </StyledDiv2>
                    <Link to="/BoardList">
                        <StyledButton1>
                            글등록
                        </StyledButton1>
                    </Link>
                </StyledDiv1>
            </form>
        </div>
    )
}

export default BoardWriteForm;