import React from "react";
import StyledTd from '../styled/StyledTd';

function BoardListZoneForm(boardList){

    const {bd_idx, bd_title, mem_userid, bd_regDate, bd_recommand} = boardList.boardList
    console.log('마지막 form');
    console.log(boardList);
    console.log(boardList.boardList.bd_title);

    return(
        <tr style={{borderBottom:'1px solid grey'}}>
            <StyledTd style={{width:'130px'}}>
                {bd_idx}
            </StyledTd>
            <StyledTd style={{width:'380px'}}>
                {bd_title}
            </StyledTd>
            <StyledTd >
                {mem_userid} 
            </StyledTd>
            <StyledTd style={{width:'300px'}}>
                {bd_regDate}
            </StyledTd>
            <StyledTd style={{width:'130px'}}>
                {bd_recommand}
            </StyledTd>
        </tr>
    )

}

export default BoardListZoneForm;