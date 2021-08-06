import React from 'react';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledButtonMenu from '../styled/StyledButtonMenu';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledButton1 from '../styled/StyledButton1';
import StyledSubmit from '../styled/StyledSubmit';

export default function TimeChoiceForm() {

    return (
        <div className="body">
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        WONY Study Club
                    </StyledH1>
                </div>        
                <StyledDiv2>
                    <StyledButtonMenu> + 1시간 <br/>(1500원)</StyledButtonMenu>
                </StyledDiv2>
                <StyledDiv2>
                    <StyledButtonMenu>+ 3시간 <br/>(3500원)</StyledButtonMenu>
                </StyledDiv2>
                <StyledDiv2>
                    선택 시간
                </StyledDiv2>
                <StyledDiv2>
                    납부해야 할 금액
                </StyledDiv2>      
                <StyledDiv2>
                    <StyledSubmit>자리 선택</StyledSubmit>
                </StyledDiv2>
            </StyledDiv1>
        </div>
    )

}