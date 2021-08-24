import { useState } from "react"
import StyledButtonZone from "../styled/StyledButtonZone"
import StyledDivZone2 from "../styled/StyledDivZone2"
import {   useDispatch } from "react-redux";
import { seats } from '../../modules/seat';
const SeatZoneForm = ({zone,  onSubmit, onClickZone }) => {
   
    const {st_idx ,st_seatNumber, st_seatStatus,} = zone


  




        console.log("@@ : " + st_seatNumber)


    return(
 
        <StyledDivZone2>
            <StyledButtonZone onClick={onClickZone}  data-value={st_seatNumber} click>{st_seatNumber}</StyledButtonZone>            
        </StyledDivZone2>
  
    )

}

export default SeatZoneForm