import React from 'react';
import { Link } from 'react-router-dom';
import StyledBoardBtnDiv from '../styled/StyledBoardBtnDiv';
import StyledBoardButton from '../styled/StyledBoardButton';
import StyledDiv4 from '../styled/StyledDiv4';
import StyledH1 from '../styled/StyledH1';
import StyledTable from '../styled/StyledTable';
import StyledTh from '../styled/StyledTh';
import BoardListZoneForm from './BoardListZoneForm';

function BoardListForm({boardLists}) {
    return (
        <div className="body">
            <StyledDiv4>
                <div className="title" style={{marginBottom:"40px", paddingTop:"40px"}} >
                    <StyledH1>
                        WONY Study Room 게시판
                    </StyledH1>
                </div>
            </StyledDiv4>
            <StyledBoardBtnDiv>
                <div style={{display:'contents'}}>
                <Link to='/menu' style={{marginBottom: '35px'}} >
                    <StyledBoardButton style={{width:'110px', height:'40px', padding:'0'}} >
                        메뉴
                    </StyledBoardButton>    
                </Link>
                </div>
                <div style={{display:'inline-block', marginLeft: '14px'}}>
                <Link to='/boardWrite' >
                    <StyledBoardButton style={{width:'140px', height:'40px', padding:'0'}} >
                        글쓰기
                    </StyledBoardButton>    
                </Link>
                </div>
            </StyledBoardBtnDiv>
            <div style={{width:'75%', margin:'0 auto',}}>
                {boardLists && (
                <StyledTable styled={{display:'inline'}}>
                    <tr style={{borderBottom:'1px solid grey'}}>
                        <StyledTh style={{width:'130px'}}>
                            번호
                        </StyledTh>
                        <StyledTh style={{width:'370px'}}>
                            글제목
                        </StyledTh>
                        <StyledTh style={{width:'370px'}}>
                            글쓴이
                        </StyledTh>
                        <StyledTh style={{width:'430px'}}>
                            날짜
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

