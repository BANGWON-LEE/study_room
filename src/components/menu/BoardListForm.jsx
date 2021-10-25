import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton1 from '../styled/StyledButton1';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledH1 from '../styled/StyledH1';
import StyledTable from '../styled/StyledTable';
import StyledTh from '../styled/StyledTh';
import BoardListZoneForm from './BoardListZoneForm';

function BoardListForm({boardLists}) {
    return (
        <div className="body">
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        WONY Study Club 게시판
                    </StyledH1>
                </div>
            </StyledDiv1>
            <div style={{width:'145px', float:'left', display:'block', marginLeft:'190px'}}>
                <Link to='/menu' >
                    <StyledButton1>메뉴</StyledButton1>    
                </Link>
            </div>
            <div style={{width:'145px', float:'right', display:'block', marginRight:'190px'}}>
                <Link to='/boardWrite' >
                    <StyledButton1>글쓰기</StyledButton1>    
                </Link>
            </div>
            <div style={{width:'75%', margin:'0 auto'}}>
                {boardLists && (
                <StyledTable styled={{display:'inline'}}>
                    <tr style={{borderBottom:'1px solid grey'}}>
                        <StyledTh style={{width:'130px'}}>
                            번호
                        </StyledTh>
                        <StyledTh style={{width:'380px'}}>
                            글제목
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
                    
                    {boardLists.map((boardList) =>(
                        <BoardListZoneForm boardList={boardList}/>
                    ))}
                </StyledTable>
                    )}
            </div>        
        </div>



    )
}

export default BoardListForm;

