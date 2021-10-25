import React from 'react';
import { Link } from 'react-router-dom';
import BoardCommentDetail from '../../containers/menu/BoardCommentDetail';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv3 from '../styled/StyledDiv3';
import StyledH1 from '../styled/StyledH1';


function BoardContent({boardContents, onBack}) {
    return(
        <div className="body">
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        게시판
                    </StyledH1>
                </div>
            </StyledDiv1> 
            <StyledDiv3>
                <StyledDiv2>
                    <div style={{float : 'left', display:'inline-block'}}>
                        제목 : 
                    </div>
                    <div style={{display:'inline-block', paddingRight:'45px'}}>
                        {boardContents.bd_title}
                    </div>   
                </StyledDiv2>
                <StyledDiv2>
                    <div style={{float : 'left', display:'inline-block'}}>
                        저자: 
                    </div>
                    <div style={{display:'inline-block', paddingRight:'45px'}}>
                        {boardContents.mem_userid}
                    </div>   
                </StyledDiv2>
                <StyledDiv2>
                    <div style={{float : 'left', display:'inline-block'}}>
                        날짜 : 
                    </div>
                    <div style={{display:'inline-block', paddingRight:'45px'}}>
                        {boardContents.bd_regDate}
                    </div>   
                </StyledDiv2>
                <StyledDiv2>
                    <p style={{textAlign : 'left'}}>
                        내용 : 
                    </p>
                    <div style={{width :'100%', wordBreak:'break-all', textAlign:'left'}}>
                        {boardContents.bd_cotents}
                    </div>
                </StyledDiv2>
                <StyledDiv2>
                    <StyledButton1 onClick={onBack}>
                            뒤로가기
                    </StyledButton1>
                </StyledDiv2>
            </StyledDiv3>
            <BoardCommentDetail/>
        </div>
    )
}

export default BoardContent;