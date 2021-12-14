import styled from "styled-components";
import customMedia from "../customMedia";

const StyledBoardTd = styled.td`
    width: 370px;
    height: 26px;
    vertical-align: middle;

    ${customMedia.lessThan('mobile')`
        width: 32%;
    `}

`

export default StyledBoardTd;