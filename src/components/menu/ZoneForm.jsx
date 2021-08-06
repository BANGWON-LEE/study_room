import React from 'react';
import StyledButtonZone from '../styled/StyledButtonZone';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDivZone from '../styled/StyledDivZone';
import StyledDivZone2 from '../styled/StyledDivZone2';
import StyledDivZone3 from '../styled/StyledDivZone3';
import StyledH1 from '../styled/StyledH1';
import StyledSubmit from '../styled/StyledSubmit';

export default function ZoneForm() {

    return (
        <div className="body">
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        자리선택
                    </StyledH1>
                </div>
            </StyledDiv1>
            <StyledDivZone>
                <StyledDivZone3>
                    <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2>
                    <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2> 
                    <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2>
                        <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2>
                </StyledDivZone3>
                <StyledDivZone3>
                    <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2>
                    <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2> 
                    <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2>
                        <StyledDivZone2>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                        <StyledButtonZone/>
                    </StyledDivZone2>
                </StyledDivZone3>     
            </StyledDivZone>
            <StyledDiv1 style={{marginTop : '15px'}}>
                <StyledSubmit>자리 선택</StyledSubmit>
            </StyledDiv1>    
        </div>


    )



}