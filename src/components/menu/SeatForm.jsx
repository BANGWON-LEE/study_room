import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { seats } from '../../modules/seat';

import StyledButtonZone from '../styled/StyledButtonZone';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledDivZone from '../styled/StyledDivZone';
import StyledDivZone2 from '../styled/StyledDivZone2';
import StyledDivZone3 from '../styled/StyledDivZone3';
import StyledH1 from '../styled/StyledH1';
import StyledSubmit from '../styled/StyledSubmit';
import SeatZoneForm from './SeatZoneForm'

const SeatForm = ({onSubmit, zones, users, hour, onClickZone}) => {
    

    return (
        <div className="body">
            <StyledDivZone>
            <StyledDiv1>
                <div className="title">
                    <StyledH1>
                        좌석
                    </StyledH1>
                </div>
            </StyledDiv1>
            { zones && (
                <StyledDivZone3 style={{height : '80%'}}>
              {zones.map((zone) => ( 
                  
                  
                  <SeatZoneForm zone={zone} key={zone.st_seatNumber} hour={hour}
                            users={users} onClickZone={onClickZone}/>
                
                    

               ))} 
                </StyledDivZone3>
            )}
                
            </StyledDivZone>
            {hour >= 1 ? 
            <form onSubmit={onSubmit}>
                <StyledDiv2 style={{textAlign: "center"}}>
                    <StyledSubmit>좌석 선택</StyledSubmit>
                </StyledDiv2>
            </form> 
                :
            <Link to='/menu'>
               <StyledDiv2 style={{textAlign: "center"}}>
                    <StyledSubmit>메뉴</StyledSubmit>
                </StyledDiv2>
           </Link>
}
        </div>


    )

    
}

export default SeatForm;