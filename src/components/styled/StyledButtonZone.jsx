import styled from "styled-components";

const StyledButtonZone = styled.button`
    border-radius: 3px;
    background : white;
    border : 2px solid pink;        
    width:45px;
    height: 40px;

    :hover {
        background-color: red;
        border : 2px solid red;
        
        }
    :focus {
        background-color: red;
        }

`;

export default StyledButtonZone;