import React, { useState } from 'react';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledButtonMenu from '../styled/StyledButtonMenu';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledButton1 from '../styled/StyledButton1';
import StyledSubmit from '../styled/StyledSubmit';
import { Link } from 'react-router-dom';
//import SeatPage from '../../pages/SeatPage'
//import SeatForm from './SeatForm'
import SeatDetail from '../../containers/menu/SeatDetail';

const TimeChoiceForm = ({hour,onClick, threeClick, cost, handleSeat, seatForm}) => {
    
    return (
        <div className="body">
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        WONY Study Club
                    </StyledH1>
                </div>        
                <StyledDiv2>
                    <StyledButtonMenu onClick={onClick}> + 1시간 <br/>(1500원)</StyledButtonMenu>
                </StyledDiv2>
                <StyledDiv2>
                    <StyledButtonMenu onClick={threeClick}>+ 3시간 <br/>(3500원)</StyledButtonMenu>
                </StyledDiv2>
                
                    <StyledDiv2>
                        {hour} 시간
                    </StyledDiv2>
                    <StyledDiv2>
                        {cost} 원
                    </StyledDiv2>      
                    <StyledDiv2>
                        <StyledSubmit onClick={handleSeat}>다음</StyledSubmit>    
                    </StyledDiv2>
            </StyledDiv1>
          
        </div>
    )

}

export default TimeChoiceForm;