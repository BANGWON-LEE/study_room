import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledTable from '../styled/StyledTable';
import StyledTd from '../styled/StyledTd';
import StyledTh from '../styled/StyledTh';

function BoardListForm() {

    return (
        <div className="body">
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        WONY Study Club 게시판
                    </StyledH1>
                </div>
            </StyledDiv1>
            <div style={{width:'145px', float:'right', display:'block', marginRight:'140px'}}>
                    <Link to='/boardWrite' >
                        <StyledButton1>글쓰기</StyledButton1>    
                    </Link>
                </div>
            <div style={{width:'75%', margin:'0 auto'}}>
                <StyledTable styled={{display:'inline'}}>
                    <tr style={{borderBottom:'1px solid grey'}}>
                        <StyledTh style={{width:'130px'}}>
                            번호
                        </StyledTh>
                        <StyledTh style={{width:'380px'}}>
                            제목
                        </StyledTh>
                        <StyledTh>
                            글쓴이
                        </StyledTh>
                        <StyledTh style={{width:'300px'}}>
                            날짜
                        </StyledTh>
                        <StyledTh style={{width:'130px'}}>
                            추천수
                        </StyledTh>
                    </tr>
                    <tr style={{borderBottom:'1px solid grey'}}>
                        <StyledTd style={{width:'130px'}}>
                            1
                        </StyledTd>
                        <StyledTd style={{width:'380px'}}>
                            책상 청결관리 깨끗하게 부탁드려요
                        </StyledTd>
                        <StyledTd >
                            이방원  
                        </StyledTd>
                        <StyledTd style={{width:'300px'}}>
                            2021-10-10 20:33:45
                        </StyledTd>
                        <StyledTd style={{width:'130px'}}>
                            3
                        </StyledTd>
                    </tr>
                </StyledTable>
            </div>        
        </div>



    )
}

export default BoardListForm;