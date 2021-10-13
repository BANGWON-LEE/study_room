
import StyledButtonZone from "../styled/StyledButtonZone"
import StyledDivZone2 from "../styled/StyledDivZone2"
import StyledImg1 from "../styled/StyledImg1"
// 좌석을 보여주는 컴포넌트이다.
// st_seatStatus는 현재 좌석의 상태를 말한다. (S일 경우 좌석 사용 중, E의 경우 좌석이 비어있음) 
// st_seatNumber은 좌석의 고유 번호를 말한다.
const SeatZoneForm = ({zone, onClickZone }) => {

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
                >
                    <StyledImg1 src='img/emptyTable.png' />
                        {st_seatNumber}
                </StyledButtonZone>
            }        
        </StyledDivZone2>
    )

}

export default SeatZoneForm