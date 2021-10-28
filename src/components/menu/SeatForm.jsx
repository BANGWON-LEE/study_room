import React from "react";
import { Link } from "react-router-dom";
import StyledDiv4 from "../styled/StyledDiv4";
import StyledDiv2 from "../styled/StyledDiv2";
import StyledDivZone from "../styled/StyledDivZone";
import StyledDivZone3 from "../styled/StyledDivZone3";
import StyledH1 from "../styled/StyledH1";
import StyledSubmit from "../styled/StyledSubmit";
import SeatZoneForm from "./SeatZoneForm";

// 선택할 좌석을 보여주는 컴포넌트이다.
// 데이터베이스에 등록된 전체 좌석의 수와 상태를 전부 보여준다.
// 좌석확인(선택된 좌석)을 보여주는 컴포넌트와 같은 컴포넌트이다.
// 좌석을 선택할 때는 [좌석 선택] 버튼이 나타나고, 선택된 좌석을 보여줄 때는 [메뉴] 버튼이 나온다.
// 버튼은 삼항연산자를 사용하여 구분되어 나타나는데, 그 구분은 {hour} 상태값이다.
// 좌석을 선택할 때, 사용할 시간을 먼저 선택하는데, 그러한 경우 {hour}에 1이상의 상태값이 담겨있다.
// 그러므로 삼항연산자에 나온 것처럼 {hour >= 1} 이면 [좌선선택] 버튼이 나오고,
// 좌석확인(선택된 좌석) 버튼을 클릭하면 {hour}은 0이기 때문에 [메뉴] 버튼이 나온다.

const SeatForm = ({ onSubmit, zones, hour, onClickZone }) => {
    return (
        <div className="body">
        
        <StyledDivZone style={{ backgroundColor: "#E7E7E7" }}>
            <StyledDiv4>
            <div className="title">
                <StyledH1>좌석</StyledH1>
            </div>
            </StyledDiv4>
            {zones && (
            <StyledDivZone3 style={{ height: "80%" }}>
                {zones.map((zone) => (
                <SeatZoneForm
                    zone={zone}
                    key={zone.st_seatNumber}
                    onClickZone={onClickZone}
                />
                ))}
            </StyledDivZone3>
            )}
        </StyledDivZone>
        {hour >= 1 ? (
                <StyledDiv2 style={{ textAlign: "center" }}>
                    
                        <StyledSubmit onClick={onSubmit}>
                            좌석 선택
                        </StyledSubmit>
                    
                </StyledDiv2>
        ) : (
            <Link to="/menu">
            <StyledDiv2 style={{ textAlign: "center" }}>
                <StyledSubmit>메뉴</StyledSubmit>
            </StyledDiv2>
            </Link>
        )}
            
        </div>
    );
};

export default SeatForm;
