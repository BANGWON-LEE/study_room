import React from 'react';
import StyledDiv4 from '../styled/StyledDiv4';
import StyledButtonMenu from '../styled/StyledButtonMenu';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import StyledSubmit from '../styled/StyledSubmit';

// 메뉴 컴포넌트에 [입장]버튼을 클릭하면 현재 컴포넌트로 이동한다.
// 사용할 시간을 선택하면 사용할 시간{hour}과 납부할 금액{cost}이 나타난다.
// onClick 즉, {handleSeat}는 좌석을 선택하는 컴포넌트를 불러오는 역할을 한다. 그러면 시간 선택 부분
// 아래에 좌석을 선택하는 화면이 나타난다.

const TimeChoiceForm = ({hour, oneClick, threeClick, cost, handleSeat}) => {
    
    return (
        <div className="body">
            <StyledDiv4>
                <div className="title" style={{marginBottom:"40px", paddingTop:"40px"}}>
                    <StyledH1>
                        WONY Study Club
                    </StyledH1>
                </div>        
                <StyledDiv2>
                    <StyledButtonMenu onClick={oneClick}> + 1시간 <br/>(1500원)</StyledButtonMenu>
                </StyledDiv2>
                <StyledDiv2>
                    <StyledButtonMenu onClick={threeClick}>+ 3시간 <br/>(3500원)</StyledButtonMenu>
                </StyledDiv2>  
                <StyledDiv2>
                    {hour} 시간 <br/> (+1 시간 버튼은 테스트 관계로 실제로 추가되는 시간은 + 1분)
                </StyledDiv2>
                <StyledDiv2>
                    {cost} 원
                </StyledDiv2>      
                <StyledDiv2>
                    <StyledSubmit onClick={handleSeat}>
                        다음
                    </StyledSubmit>    
                </StyledDiv2>
            </StyledDiv4>  
        </div>
    )

}

export default TimeChoiceForm;