import React from "react";
import { Link } from "react-router-dom";
import StyledBoardTd from "../styled/StyledBoardTd";
import StyledTd from '../styled/StyledTd';

function BoardListZoneForm(boardList){

    const {bd_idx, bd_title, mem_userid, bd_regDate} = boardList.boardList


    return(
        <Link to={`/boardContents/${bd_idx}`} style={   {textDecoration:'none', color:"grey"}}>
            <tr style={{borderBottom:'1px solid grey', height:'35px'}}>
                <StyledTd style={{width:'130px'}}>
                    {bd_idx}
                </StyledTd>
                <StyledBoardTd >
                    {bd_title}
                </StyledBoardTd>
                <StyledBoardTd >
                    {mem_userid} 
                </StyledBoardTd>
                <StyledTd style={{width:'430px'}}>
                    {bd_regDate}
                </StyledTd>
            </tr>
        </Link>
    )

}

export default BoardListZoneForm;