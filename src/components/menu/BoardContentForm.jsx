import React from 'react';
import { Link } from 'react-router-dom';
import BoardCommentDetail from '../../containers/menu/BoardCommentDetail';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDiv3 from '../styled/StyledDiv3';

import StyledDiv5 from '../styled/StyledDiv5';
import StyledH1 from '../styled/StyledH1';


function BoardContent({boardContents, onBack, cm_mem_idx}) {

    const bd_idx = boardContents.bd_idx;
  

    return(
        <div className="body">
            <StyledDiv5>
                <div className="title">
                    <StyledH1>
                        게시판
                    </StyledH1>
                </div>
            </StyledDiv5> 
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
                {cm_mem_idx === boardContents.bd_mem_idx?
                <StyledDiv2>
                    <Link to={`/boardEdit/${bd_idx}`}>
                        <StyledButton1 >
                                글수정하기
                        </StyledButton1>
                    </Link>
                </StyledDiv2>
                : null }
            </StyledDiv3>
            <BoardCommentDetail/>
        </div>
    )
}

export default BoardContent;