import styled from "styled-components";
import customMedia from "../customMedia";

const StyledDivZone = styled.div`
position: relative;
display: block;
margin: 0 auto;
border : 2px solid gray;
border-radius : 5px;
width : 70%;
height : 600px;

    ${customMedia.lessThan('tablet')`
    height : 1100px;
    `}
    ${customMedia.lessThan('mobile')`
    height : 1100px;
    `}

`;

export default StyledDivZone;