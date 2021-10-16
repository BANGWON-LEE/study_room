import React from "react";
import StyledButton1 from "../styled/StyledButton1";
import StyledDiv2 from "../styled/StyledDiv2";
import StyledDiv3 from "../styled/StyledDiv3";
import StyledTextarea2 from "../styled/StyledTextarea2";

function BoardCommentForm() {
    return(
        <div className="body" style={{height:'90%'}}>
            <StyledDiv3 style={{backgroundColor:'gray', paddingTop:'10px', height:'85%'}}>
                <form>
                    <StyledDiv2 style={{paddingLeft:'7px'}}>
                        <StyledTextarea2 name="cm_content" style={{display:'inline-table', marginRight:'0px', paddingRight:'0px', borderRightWidth: '0px'}} />
                        <StyledButton1 style={{hegiht:'18px' , fontSize:'11.5px', marginLeft:'0px'}}>
                            등록
                        </StyledButton1>
                    </StyledDiv2>
                </form>
                <StyledDiv2 style={{paddingLeft:'18px'}}>
                    <div style={{float : 'left', display:'inline-block'}}>
                        저자: 
                    </div>
                    <div style={{display:'inline-block', paddingRight:'45px'}}>
                        인정 인정 인정
                    </div>   
                </StyledDiv2>
            </StyledDiv3 >
        </div>
    )
}

export default BoardCommentForm;
