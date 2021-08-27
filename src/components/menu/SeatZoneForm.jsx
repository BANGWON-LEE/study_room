
import StyledButtonZone from "../styled/StyledButtonZone"
import StyledDivZone2 from "../styled/StyledDivZone2"
import StyledImg1 from "../styled/StyledImg1"


const SeatZoneForm = ({zone,   onClickZone }) => {
   
    const { st_seatNumber, st_seatStatus,} = zone

    return(
        <StyledDivZone2>
            {st_seatStatus === 'S' ? 
                <StyledImg1 src='img/fullTable.png'  
                    onClick={onClickZone}  
                    data-value={st_seatNumber} 
                    click style={{pointerEvents: 'none', width:'50px'}} 
                    value={st_seatNumber}
                />
                :     
                <StyledButtonZone 
                    onClick={onClickZone}  
                    data-value={st_seatNumber} 
                    click 
                >
                    <StyledImg1 src='img/emptyTable.png' />
                        {st_seatNumber}
                </StyledButtonZone>
            }        
        </StyledDivZone2>
    )

}

export default SeatZoneForm